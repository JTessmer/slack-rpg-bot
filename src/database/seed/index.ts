import { PrismaClient } from '@prisma/client'
import { logger } from '../../util/logger'
import * as models from './models'

const prisma = new PrismaClient()

async function main() {
  logger.debug('Beginning database seeding:')
  await models.seedEquipment(prisma)
  await models.seedSpells(prisma)
  await models.seedTalents(prisma)
  await models.seedWeapons(prisma)
  // Creatures seed depends on other seeds being present
  await models.seedCreatures(prisma)
  logger.debug('Database seeding complete')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    // console.error(e)
    await prisma.$disconnect()
    process.exit()
  })
