// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class joinedDao extends ethereum.Event {
  get params(): joinedDao__Params {
    return new joinedDao__Params(this);
  }
}

export class joinedDao__Params {
  _event: joinedDao;

  constructor(event: joinedDao) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class leftDao extends ethereum.Event {
  get params(): leftDao__Params {
    return new leftDao__Params(this);
  }
}

export class leftDao__Params {
  _event: leftDao;

  constructor(event: leftDao) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class proposalCreated extends ethereum.Event {
  get params(): proposalCreated__Params {
    return new proposalCreated__Params(this);
  }
}

export class proposalCreated__Params {
  _event: proposalCreated;

  constructor(event: proposalCreated) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class proposalVoted extends ethereum.Event {
  get params(): proposalVoted__Params {
    return new proposalVoted__Params(this);
  }
}

export class proposalVoted__Params {
  _event: proposalVoted;

  constructor(event: proposalVoted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Dao__daoMemberResult {
  value0: Address;
  value1: boolean;
  value2: BigInt;

  constructor(value0: Address, value1: boolean, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  get_address(): Address {
    return this.value0;
  }

  getIsMember(): boolean {
    return this.value1;
  }

  getTimestamp(): BigInt {
    return this.value2;
  }
}

export class Dao__idToProposalResult {
  value0: Address;
  value1: BigInt;
  value2: string;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;
  value7: Address;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: string,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: boolean,
    value7: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }

  getContractAdd(): Address {
    return this.value0;
  }

  getTokenId(): BigInt {
    return this.value1;
  }

  getDescription(): string {
    return this.value2;
  }

  getYayVotes(): BigInt {
    return this.value3;
  }

  getNayVotes(): BigInt {
    return this.value4;
  }

  getDeadline(): BigInt {
    return this.value5;
  }

  getExecuted(): boolean {
    return this.value6;
  }

  getDestination(): Address {
    return this.value7;
  }
}

export class Dao extends ethereum.SmartContract {
  static bind(address: Address): Dao {
    return new Dao("Dao", address);
  }

  createProposal(
    _contract: Address,
    _tokenId: BigInt,
    _destination: Address,
    _description: string,
  ): BigInt {
    let result = super.call(
      "createProposal",
      "createProposal(address,uint256,address,string):(uint256)",
      [
        ethereum.Value.fromAddress(_contract),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_destination),
        ethereum.Value.fromString(_description),
      ],
    );

    return result[0].toBigInt();
  }

  try_createProposal(
    _contract: Address,
    _tokenId: BigInt,
    _destination: Address,
    _description: string,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createProposal",
      "createProposal(address,uint256,address,string):(uint256)",
      [
        ethereum.Value.fromAddress(_contract),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromAddress(_destination),
        ethereum.Value.fromString(_description),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  daoMember(param0: Address): Dao__daoMemberResult {
    let result = super.call(
      "daoMember",
      "daoMember(address):(address,bool,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return new Dao__daoMemberResult(
      result[0].toAddress(),
      result[1].toBoolean(),
      result[2].toBigInt(),
    );
  }

  try_daoMember(param0: Address): ethereum.CallResult<Dao__daoMemberResult> {
    let result = super.tryCall(
      "daoMember",
      "daoMember(address):(address,bool,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Dao__daoMemberResult(
        value[0].toAddress(),
        value[1].toBoolean(),
        value[2].toBigInt(),
      ),
    );
  }

  idToProposal(param0: BigInt): Dao__idToProposalResult {
    let result = super.call(
      "idToProposal",
      "idToProposal(uint256):(address,uint256,string,uint256,uint256,uint256,bool,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new Dao__idToProposalResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean(),
      result[7].toAddress(),
    );
  }

  try_idToProposal(
    param0: BigInt,
  ): ethereum.CallResult<Dao__idToProposalResult> {
    let result = super.tryCall(
      "idToProposal",
      "idToProposal(uint256):(address,uint256,string,uint256,uint256,uint256,bool,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Dao__idToProposalResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean(),
        value[7].toAddress(),
      ),
    );
  }

  numProposal(): BigInt {
    let result = super.call("numProposal", "numProposal():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numProposal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("numProposal", "numProposal():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _lendingContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class CreateProposalCall extends ethereum.Call {
  get inputs(): CreateProposalCall__Inputs {
    return new CreateProposalCall__Inputs(this);
  }

  get outputs(): CreateProposalCall__Outputs {
    return new CreateProposalCall__Outputs(this);
  }
}

export class CreateProposalCall__Inputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }

  get _contract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _destination(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _description(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateProposalCall__Outputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecuteProposalCall extends ethereum.Call {
  get inputs(): ExecuteProposalCall__Inputs {
    return new ExecuteProposalCall__Inputs(this);
  }

  get outputs(): ExecuteProposalCall__Outputs {
    return new ExecuteProposalCall__Outputs(this);
  }
}

export class ExecuteProposalCall__Inputs {
  _call: ExecuteProposalCall;

  constructor(call: ExecuteProposalCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteProposalCall__Outputs {
  _call: ExecuteProposalCall;

  constructor(call: ExecuteProposalCall) {
    this._call = call;
  }
}

export class JoinDaoCall extends ethereum.Call {
  get inputs(): JoinDaoCall__Inputs {
    return new JoinDaoCall__Inputs(this);
  }

  get outputs(): JoinDaoCall__Outputs {
    return new JoinDaoCall__Outputs(this);
  }
}

export class JoinDaoCall__Inputs {
  _call: JoinDaoCall;

  constructor(call: JoinDaoCall) {
    this._call = call;
  }
}

export class JoinDaoCall__Outputs {
  _call: JoinDaoCall;

  constructor(call: JoinDaoCall) {
    this._call = call;
  }
}

export class LeaveDaoCall extends ethereum.Call {
  get inputs(): LeaveDaoCall__Inputs {
    return new LeaveDaoCall__Inputs(this);
  }

  get outputs(): LeaveDaoCall__Outputs {
    return new LeaveDaoCall__Outputs(this);
  }
}

export class LeaveDaoCall__Inputs {
  _call: LeaveDaoCall;

  constructor(call: LeaveDaoCall) {
    this._call = call;
  }
}

export class LeaveDaoCall__Outputs {
  _call: LeaveDaoCall;

  constructor(call: LeaveDaoCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class VoteProposalCall extends ethereum.Call {
  get inputs(): VoteProposalCall__Inputs {
    return new VoteProposalCall__Inputs(this);
  }

  get outputs(): VoteProposalCall__Outputs {
    return new VoteProposalCall__Outputs(this);
  }
}

export class VoteProposalCall__Inputs {
  _call: VoteProposalCall;

  constructor(call: VoteProposalCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get vote(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class VoteProposalCall__Outputs {
  _call: VoteProposalCall;

  constructor(call: VoteProposalCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}