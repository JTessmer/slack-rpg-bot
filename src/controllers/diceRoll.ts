import { rollDice } from '~/util/dice'
import { getDiceResultBlocks } from '~/util/formatters'
import { getDiceFromText, getRollModifierFromText } from '~/util/parsers'
import type { FastifyRequest } from 'fastify'

type Body = {
  text?: string
  user_name: string
}

export function diceRoll(
  request: FastifyRequest<{ Body: Body }>
): string | Record<string, unknown> {
  const dice = getDiceFromText(request.body.text)
  const modifier = getRollModifierFromText(request.body.text)

  if (!dice) {
    return {
      response_type: 'ephemeral',
      text: 'Please specify the dice to roll in the format of `[count]d[sides] +[modifier]`'
    }
  }

  const result = rollDice(dice, modifier)
  const blocks = getDiceResultBlocks(request.body.user_name, result, dice, modifier)

  return { response_type: 'in_channel', ...blocks }
}
