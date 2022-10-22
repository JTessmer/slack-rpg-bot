import { RollModifierAction } from '~/constants'
import type { Dice, RollModifier, RollResult } from '~/types'

/** Applies any given modifier value to the initial value */
function applyModifier(value: number, modifier?: RollModifier | null): number {
  if (!modifier) return value

  return modifier.actionType === RollModifierAction.ADD
    ? value + modifier.amount
    : value - modifier.amount
}

/** Roll the given Dice and optionally applies a RollModifier to the result */
export function rollDice(dice: Dice, modifier?: RollModifier | null): RollResult {
  const rolls: number[] = []
  let naturalTotal = 0

  for (let i = 0; i < dice.count; i++) {
    const rollResult = Math.floor(Math.random() * dice.sides) + 1

    rolls.push(rollResult)
    naturalTotal += rollResult
  }

  return {
    rolls,
    naturalTotal,
    total: applyModifier(naturalTotal, modifier)
  }
}
