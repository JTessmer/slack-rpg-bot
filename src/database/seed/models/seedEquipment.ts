import { logger } from '../../../util/logger'
import type { PrismaClient } from '@prisma/client'

export async function seedEquipment(prisma: PrismaClient) {
  logger.debug('- Seeding Equipment')

  await prisma.equipment.upsert({
    where: { name: 'Leather Vest' },
    update: {},
    create: {
      name: 'Leather Vest',
      armor: 1,
      description: 'A worn leather vest',
      slot: 'CHEST'
    }
  })
}
