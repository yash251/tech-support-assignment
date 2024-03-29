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

export class CollateralFunds extends ethereum.SmartContract {
  static bind(address: Address): CollateralFunds {
    return new CollateralFunds("CollateralFunds", address);
  }

  controller(param0: Address): boolean {
    let result = super.call("controller", "controller(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_controller(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("controller", "controller(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getLatestPrice(): BigInt {
    let result = super.call("getLatestPrice", "getLatestPrice():(int256)", []);

    return result[0].toBigInt();
  }

  try_getLatestPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLatestPrice",
      "getLatestPrice():(int256)",
      [],
    );
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

  usdtBalance(): BigInt {
    let result = super.call("usdtBalance", "usdtBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_usdtBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("usdtBalance", "usdtBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userToPaid(param0: Address): BigInt {
    let result = super.call("userToPaid", "userToPaid(address):(uint256)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBigInt();
  }

  try_userToPaid(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("userToPaid", "userToPaid(address):(uint256)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

export class AddControllerCall extends ethereum.Call {
  get inputs(): AddControllerCall__Inputs {
    return new AddControllerCall__Inputs(this);
  }

  get outputs(): AddControllerCall__Outputs {
    return new AddControllerCall__Outputs(this);
  }
}

export class AddControllerCall__Inputs {
  _call: AddControllerCall;

  constructor(call: AddControllerCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddControllerCall__Outputs {
  _call: AddControllerCall;

  constructor(call: AddControllerCall) {
    this._call = call;
  }
}

export class RemoveControllerCall extends ethereum.Call {
  get inputs(): RemoveControllerCall__Inputs {
    return new RemoveControllerCall__Inputs(this);
  }

  get outputs(): RemoveControllerCall__Outputs {
    return new RemoveControllerCall__Outputs(this);
  }
}

export class RemoveControllerCall__Inputs {
  _call: RemoveControllerCall;

  constructor(call: RemoveControllerCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveControllerCall__Outputs {
  _call: RemoveControllerCall;

  constructor(call: RemoveControllerCall) {
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

export class ReturnFundsCall extends ethereum.Call {
  get inputs(): ReturnFundsCall__Inputs {
    return new ReturnFundsCall__Inputs(this);
  }

  get outputs(): ReturnFundsCall__Outputs {
    return new ReturnFundsCall__Outputs(this);
  }
}

export class ReturnFundsCall__Inputs {
  _call: ReturnFundsCall;

  constructor(call: ReturnFundsCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ReturnFundsCall__Outputs {
  _call: ReturnFundsCall;

  constructor(call: ReturnFundsCall) {
    this._call = call;
  }
}

export class TransferFundsCall extends ethereum.Call {
  get inputs(): TransferFundsCall__Inputs {
    return new TransferFundsCall__Inputs(this);
  }

  get outputs(): TransferFundsCall__Outputs {
    return new TransferFundsCall__Outputs(this);
  }
}

export class TransferFundsCall__Inputs {
  _call: TransferFundsCall;

  constructor(call: TransferFundsCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferFundsCall__Outputs {
  _call: TransferFundsCall;

  constructor(call: TransferFundsCall) {
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
