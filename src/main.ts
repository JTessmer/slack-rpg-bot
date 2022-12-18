import fastifyFormBody from '@fastify/formbody'
import * as dotenv from 'dotenv'
dotenv.config()
import Fastify from 'fastify'
import * as routers from '~/routers'
import { PORT } from '~/util/env'
import { logger } from '~/util/logger'
import { getRequestInfo } from './util/http'

const server = Fastify()

server.addHook('onResponse', (req, res) => {
  logger.info(getRequestInfo(req, res))
})

server.addHook('onError', async (req, res, error) => {
  const errMsg = `Error: ${JSON.stringify(error)}`
  logger.error(getRequestInfo(req, res, errMsg))

  await res.status(500).send({ message: 'Internal error' })
})

async function start() {
  await server.register(fastifyFormBody)
  await server.register(routers.v1, { prefix: '/v1' })

  server.listen({ port: PORT }, (err) => {
    if (err) throw err
    logger.info(`Server listening on port ${PORT}`)
  })
}

start().catch((reason: Error) => {
  logger.error(`${reason.message} --> ${reason?.stack || ''}`)
})
