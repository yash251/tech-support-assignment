import {
  claimed as claimedEvent,
  staked as stakedEvent,
  unstaked as unstakedEvent,
} from "../generated/Collateral/Collateral"
import { claimed, staked, unstaked } from "../generated/schema"

export function handleclaimed(event: claimedEvent): void {
  let entity = new claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlestaked(event: stakedEvent): void {
  let entity = new staked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.contractAdd = event.params.contractAdd
  entity.tokenId = event.params.tokenId
  entity.value = event.params.value
  entity._term = event.params._term

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleunstaked(event: unstakedEvent): void {
  let entity = new unstaked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.contractAdd = event.params.contractAdd
  entity.tokenId = event.params.tokenId
  entity.value = event.params.value
  entity._term = event.params._term

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
