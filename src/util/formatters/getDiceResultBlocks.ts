import type { Dice, RollModifier, RollResult } from '~/types'

export function getDiceResultBlocks(
  username: string,
  result: RollResult,
  dice: Dice,
  modifier?: RollModifier | null
): Record<string, unknown> {
  const modifierString = modifier?.action ? `${modifier.action}${modifier.amount}` : ''

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${username} rolled _${dice.count}d${dice.sides}${modifierString}!_`
        }
      },
      { type: 'divider' },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Rolls:*\n:game_die: ${result.rolls.join(', ')}` },
          { type: 'mrkdwn', text: `*Result:*\n${result.total}` }
        ]
      },
      { type: 'divider' },
      {
        type: 'context',
        elements: [{ type: 'plain_text', text: `Natural Result: ${result.naturalTotal}` }]
      }
    ]
  }
}
