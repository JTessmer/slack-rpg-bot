import type { FastifyReply, FastifyRequest } from 'fastify'

/** Extracts useful information from Fastify request & response data */
export function getRequestInfo(req: FastifyRequest, res: FastifyReply, errMsg?: string) {
  const { body, query } = req
  // Payload could include confidential information, so we'll exclude it in production mode
  const payload = process.env.NODE_ENV === 'production' ? undefined : { body, query }

  return {
    reqId: req.id as string,
    method: req.method,
    host: req.hostname,
    url: req.url,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    forwardedFor: req.headers['X-Forwarded-For'],
    status: res.statusCode,
    responseMS: Number(res.getResponseTime().toFixed(3)),
    payload,
    errMsg
  }
}
