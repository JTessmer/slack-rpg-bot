import { RollModifierAction } from '~/constants'
import type { RollModifier } from '~/types'

/**Converts roll modifier formatted text (i.e. "+5" or "-2") */
export function getRollModifierFromText(rawText?: string): RollModifier | null {
  // Extract the modifier from the raw text
  const modifierText = /[\+-]\d+/.exec(rawText || '')?.[0]
  if (!modifierText) return null

  const action = modifierText.slice(0, 1)
  if (action !== '+' && action !== '-') return null

  return {
    action,
    actionType: action === '+' ? RollModifierAction.ADD : RollModifierAction.SUBTRACT,
    amount: parseInt(modifierText)
  }
}
