//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Counters
 * @author Matt Condon (@shrugs)
 * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number
 * of elements in a mapping, issuing ERC721 ids, or counting request ids.
 *
 * Include with using Counters for Counters.Counter;
 */
library Counters {
    struct Counter {
        // This variable should never be directly accessed by users of the library: interactions must be restricted to
        // the library's function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add
        // this feature: see https://github.com/ethereum/solidity/issues/4637
        uint256 _value; // default: 0
    }

    function current(Counter storage counter) internal view returns (uint256) {
        return counter._value;
    }

    function increment(Counter storage counter) internal {
        unchecked {
            counter._value += 1;
        }
    }

    function decrement(Counter storage counter) internal {
        uint256 value = counter._value;
        require(value > 0, "Counter: decrement overflow");
        unchecked {
            counter._value = value - 1;
        }
    }

    function reset(Counter storage counter) internal {
        counter._value = 0;
    }
}

contract Lending is ERC721Holder, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _counter;

    constructor() Ownable(0x9e267749E478eD528b4A1F40bD600dA5510258Dc) {}

    uint256 totalAmount = 0;

    struct Stake {
        address contractAdd;
        uint256 tokenId;
        address owner;
        uint256 timestamp;
        uint256 value;
        uint256 term;
    }

    event staked(
        address owner,
        address contractAdd,
        uint256 tokenId,
        uint256 value,
        uint256 _term
    );
    event unstaked(
        address owner,
        address contractAdd,
        uint256 tokenId,
        uint256 value,
        uint256 _term
    );
    event claimed(address owner, uint256 amount);

    mapping(address => Stake) public userToStake;
    mapping(address => uint256) public lastClaimed;
    mapping(uint256 => Stake) public allNfts;

    function stake(
        address _contract,
        uint256 _tokenId,
        uint256 _value,
        uint _term
    ) public {
        IERC721 currentNft = IERC721(_contract);

        require(
            currentNft.ownerOf(_tokenId) == msg.sender,
            "only owner of token can deposit"
        );
        // require(_term >= 4 * 604800); // term should be atleast 1 month
        // require(_term <= 32 * 604800); // term should be less than 4 months
        currentNft.safeTransferFrom(msg.sender, address(this), _tokenId);
        // userToStake[msg.sender] = Stake(_contract, _tokenId, payable(msg.sender), block.timestamp, _value, _term) * 604800;
        userToStake[msg.sender] = Stake(
            _contract,
            _tokenId,
            payable(msg.sender),
            block.timestamp,
            _value,
            _term
        );
        lastClaimed[msg.sender] = 0;
        _counter.increment();
        allNfts[_counter.current()] = userToStake[msg.sender];
        emit staked(msg.sender, _contract, _tokenId, _value, _term);
        totalAmount += _value;
    }

    function unstake() public {
        Stake memory crtStake = userToStake[msg.sender]; //current stake
        require(
            block.timestamp - crtStake.timestamp >= crtStake.term,
            "stake duration not over yet"
        );
        IERC721 currentNft = IERC721(crtStake.contractAdd);
        currentNft.safeTransferFrom(
            address(this),
            msg.sender,
            crtStake.tokenId
        );
        delete crtStake;
        delete lastClaimed[msg.sender];
        emit unstaked(
            msg.sender,
            crtStake.contractAdd,
            crtStake.tokenId,
            crtStake.value,
            crtStake.term
        );
    }

    function claim() public {
        require(
            block.timestamp - lastClaimed[msg.sender] >= 4 * 604800,
            "can only claim once per 4 weeks"
        );
        Stake memory crtStake = userToStake[msg.sender];
        uint256 earned = (7 * crtStake.value) / 100;
        transferFunds(msg.sender, earned);
        lastClaimed[msg.sender] = block.timestamp;
        emit claimed(msg.sender, earned);
    }

    function claimTime() public view returns (bool) {
        if (lastClaimed[msg.sender] - block.timestamp >= 4 * 604800) {
            return true;
        } else {
            return false;
        }
    }

    function fetchAllNfts() public view returns (Stake[] memory) {
        Stake[] memory nftArray = new Stake[](_counter.current());
        uint counter = 0;

        for (uint i = 0; i < _counter.current(); i++) {
            Stake storage currentItem = allNfts[i + 1];
            nftArray[counter] = currentItem;
            counter++;
        }
        return nftArray;
    }

    function fetchStake() public view returns (Stake memory) {
        return userToStake[msg.sender];
    }

    function fetchAmount() public view returns (uint256) {
        return totalAmount;
    }

    function transferFunds(address user, uint256 amount) private {
        payable(user).transfer(amount);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    receive() external payable {}

    fallback() external payable {}
}

// https://mumbai.polygonscan.com/address/0x1641883cc86055BfE18135191d90Aaa251BACb2E