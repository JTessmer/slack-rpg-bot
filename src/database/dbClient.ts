import { PrismaClient } from '@prisma/client'

let prisma = new PrismaClient()

export function dbClient() {
  if (!prisma) prisma = new PrismaClient()
  return prisma
}
