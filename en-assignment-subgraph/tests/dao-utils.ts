import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  joinedDao,
  leftDao,
  proposalCreated,
  proposalVoted
} from "../generated/Dao/Dao"

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

export function createjoinedDaoEvent(user: Address): joinedDao {
  let joinedDaoEvent = changetype<joinedDao>(newMockEvent())

  joinedDaoEvent.parameters = new Array()

  joinedDaoEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return joinedDaoEvent
}

export function createleftDaoEvent(user: Address): leftDao {
  let leftDaoEvent = changetype<leftDao>(newMockEvent())

  leftDaoEvent.parameters = new Array()

  leftDaoEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return leftDaoEvent
}

export function createproposalCreatedEvent(
  proposalId: BigInt,
  user: Address
): proposalCreated {
  let proposalCreatedEvent = changetype<proposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return proposalCreatedEvent
}

export function createproposalVotedEvent(
  proposalId: BigInt,
  user: Address
): proposalVoted {
  let proposalVotedEvent = changetype<proposalVoted>(newMockEvent())

  proposalVotedEvent.parameters = new Array()

  proposalVotedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalVotedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return proposalVotedEvent
}
