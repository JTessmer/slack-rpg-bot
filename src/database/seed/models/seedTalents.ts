import { logger } from '../../../util/logger'
import type { PrismaClient } from '@prisma/client'

export async function seedTalents(prisma: PrismaClient) {
  logger.debug('- Seeding Talents')

  await prisma.talent.upsert({
    where: { name: 'Power Attack' },
    update: {},
    create: {
      name: 'Power Attack',
      description: 'Put all your effort into a powerful blow',
      talentType: 'POWER_ATTACK'
    }
  })
}
