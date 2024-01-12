import {
  OwnershipTransferred as OwnershipTransferredEvent,
  joinedDao as joinedDaoEvent,
  leftDao as leftDaoEvent,
  proposalCreated as proposalCreatedEvent,
  proposalVoted as proposalVotedEvent,
} from "../generated/Dao/Dao"
import {
  OwnershipTransferred,
  joinedDao,
  leftDao,
  proposalCreated,
  proposalVoted,
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlejoinedDao(event: joinedDaoEvent): void {
  let entity = new joinedDao(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleleftDao(event: leftDaoEvent): void {
  let entity = new leftDao(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleproposalCreated(event: proposalCreatedEvent): void {
  let entity = new proposalCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.proposalId = event.params.proposalId
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleproposalVoted(event: proposalVotedEvent): void {
  let entity = new proposalVoted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.proposalId = event.params.proposalId
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
