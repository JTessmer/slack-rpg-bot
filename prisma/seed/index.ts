import { PrismaClient } from '@prisma/client'
import * as models from './models'

const prisma = new PrismaClient()

async function main() {
  await models.seedEquipment(prisma)
  await models.seedSpells(prisma)
  await models.seedTalents(prisma)
  await models.seedWeapons(prisma)

  await models.seedCreatures(prisma)
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
