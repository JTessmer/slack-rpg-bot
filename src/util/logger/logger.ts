import path from 'path'
import * as winston from 'winston'

/** Generates a Winston file transport instance */
function getFileConfig(filename: string, level?: string): winston.transports.FileTransportInstance {
  return new winston.transports.File({
    filename: path.join('logs', `${filename}.log`),
    level,
    maxsize: 52428800, // 50 megabytes
    format: winston.format.combine(winston.format.timestamp(), winston.format.json())
  })
}

/** Generates a Winston console transport instance */
function getConsoleConfig(level?: string): winston.transports.ConsoleTransportInstance {
  return new winston.transports.Console({
    level,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.json(),
      winston.format.printf((info) => {
        const message =
          typeof info.message === 'object'
            ? JSON.stringify(info?.message || '')
            : (info.message as string)
        return `${info.timestamp as string} ${info.level}: ${message}`
      })
    )
  })
}

// Only applies to console messages
winston.addColors({ error: 'red', warn: 'yellow', info: 'white', debug: 'green' })

export const logger = winston.createLogger({
  levels: { error: 0, warn: 1, info: 2, debug: 3 },
  transports:
    process.env.NODE_ENV === 'production'
      ? [getFileConfig('error', 'error'), getFileConfig('general')]
      : [getConsoleConfig('debug')]
})
