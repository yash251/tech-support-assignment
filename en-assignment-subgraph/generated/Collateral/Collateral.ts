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

export class claimed extends ethereum.Event {
  get params(): claimed__Params {
    return new claimed__Params(this);
  }
}

export class claimed__Params {
  _event: claimed;

  constructor(event: claimed) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class staked extends ethereum.Event {
  get params(): staked__Params {
    return new staked__Params(this);
  }
}

export class staked__Params {
  _event: staked;

  constructor(event: staked) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contractAdd(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _term(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class unstaked extends ethereum.Event {
  get params(): unstaked__Params {
    return new unstaked__Params(this);
  }
}

export class unstaked__Params {
  _event: unstaked;

  constructor(event: unstaked) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contractAdd(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _term(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Collateral__fetchStakeResultValue0Struct extends ethereum.Tuple {
  get contractAdd(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get owner(): Address {
    return this[2].toAddress();
  }

  get timestamp(): BigInt {
    return this[3].toBigInt();
  }

  get value(): BigInt {
    return this[4].toBigInt();
  }

  get term(): BigInt {
    return this[5].toBigInt();
  }
}

export class Collateral__userToStakeResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getContractAdd(): Address {
    return this.value0;
  }

  getTokenId(): BigInt {
    return this.value1;
  }

  getOwner(): Address {
    return this.value2;
  }

  getTimestamp(): BigInt {
    return this.value3;
  }

  getValue(): BigInt {
    return this.value4;
  }

  getTerm(): BigInt {
    return this.value5;
  }
}

export class Collateral extends ethereum.SmartContract {
  static bind(address: Address): Collateral {
    return new Collateral("Collateral", address);
  }

  fetchDepositAmount(): BigInt {
    let result = super.call(
      "fetchDepositAmount",
      "fetchDepositAmount():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_fetchDepositAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fetchDepositAmount",
      "fetchDepositAmount():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fetchNftValue(): BigInt {
    let result = super.call("fetchNftValue", "fetchNftValue():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fetchNftValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fetchNftValue",
      "fetchNftValue():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fetchStake(): Collateral__fetchStakeResultValue0Struct {
    let result = super.call(
      "fetchStake",
      "fetchStake():((address,uint256,address,uint256,uint256,uint256))",
      [],
    );

    return changetype<Collateral__fetchStakeResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_fetchStake(): ethereum.CallResult<Collateral__fetchStakeResultValue0Struct> {
    let result = super.tryCall(
      "fetchStake",
      "fetchStake():((address,uint256,address,uint256,uint256,uint256))",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Collateral__fetchStakeResultValue0Struct>(value[0].toTuple()),
    );
  }

  hasClaimed(param0: Address): boolean {
    let result = super.call("hasClaimed", "hasClaimed(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_hasClaimed(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasClaimed", "hasClaimed(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes,
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3),
      ],
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  userToStake(param0: Address): Collateral__userToStakeResult {
    let result = super.call(
      "userToStake",
      "userToStake(address):(address,uint256,address,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return new Collateral__userToStakeResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
    );
  }

  try_userToStake(
    param0: Address,
  ): ethereum.CallResult<Collateral__userToStakeResult> {
    let result = super.tryCall(
      "userToStake",
      "userToStake(address):(address,uint256,address,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Collateral__userToStakeResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
      ),
    );
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

  get _collateralFunds(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _contract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _term(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class UnstakeCall extends ethereum.Call {
  get inputs(): UnstakeCall__Inputs {
    return new UnstakeCall__Inputs(this);
  }

  get outputs(): UnstakeCall__Outputs {
    return new UnstakeCall__Outputs(this);
  }
}

export class UnstakeCall__Inputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}

export class UnstakeCall__Outputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}