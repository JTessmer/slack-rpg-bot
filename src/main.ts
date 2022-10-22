import fastifyFormBody from '@fastify/formbody'
import * as dotenv from 'dotenv'
dotenv.config()
import Fastify from 'fastify'
import * as routers from '~/routers'
import { PORT } from '~/util/env'

const server = Fastify({ logger: true })

async function start() {
  await server.register(fastifyFormBody)
  await server.register(routers.v1, { prefix: '/v1' })

  server.listen({ port: PORT }, (err) => {
    if (err) throw err
  })
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start()
