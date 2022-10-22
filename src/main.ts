import * as dotenv from 'dotenv'
dotenv.config()
import Fastify from 'fastify'
import { ping } from '~/controllers'
import { PORT } from '~/util/env'

const server = Fastify({ logger: true })

server.get('/ping', ping)

server.listen({ port: PORT }, (err) => {
  if (err) throw err
})
