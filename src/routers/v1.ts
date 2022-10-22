import { diceRoll, ping } from '~/controllers'
import type { FastifyPluginCallback } from 'fastify'

export const v1: FastifyPluginCallback = (server, options, done) => {
  server.get('/ping', ping)
  server.get('/roll', diceRoll)

  done()
}
