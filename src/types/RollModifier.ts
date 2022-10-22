import type { RollModifierAction } from '~/constants'

export type RollModifier = {
  action: '+' | '-'
  actionType: RollModifierAction
  amount: number
}
