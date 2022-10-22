import type { FastifyReply, FastifyRequest } from 'fastify'

export function diceRoll(
  req: FastifyRequest,
  reply: FastifyReply
): Record<string, unknown> {
  console.log('req', req)
  return {}
}
