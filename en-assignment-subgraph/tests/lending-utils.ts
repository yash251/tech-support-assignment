import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  claimed,
  staked,
  unstaked
} from "../generated/Lending/Lending"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createclaimedEvent(owner: Address, amount: BigInt): claimed {
  let claimedEvent = changetype<claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimedEvent
}

export function createstakedEvent(
  owner: Address,
  contractAdd: Address,
  tokenId: BigInt,
  value: BigInt,
  _term: BigInt
): staked {
  let stakedEvent = changetype<staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAdd",
      ethereum.Value.fromAddress(contractAdd)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("_term", ethereum.Value.fromUnsignedBigInt(_term))
  )

  return stakedEvent
}

export function createunstakedEvent(
  owner: Address,
  contractAdd: Address,
  tokenId: BigInt,
  value: BigInt,
  _term: BigInt
): unstaked {
  let unstakedEvent = changetype<unstaked>(newMockEvent())

  unstakedEvent.parameters = new Array()

  unstakedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAdd",
      ethereum.Value.fromAddress(contractAdd)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam("_term", ethereum.Value.fromUnsignedBigInt(_term))
  )

  return unstakedEvent
}
