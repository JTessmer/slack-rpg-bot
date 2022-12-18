import { logger } from '../../../util/logger'
import type { PrismaClient } from '@prisma/client'

export async function seedSpells(prisma: PrismaClient) {
  logger.debug('- Seeding Spells')

  await prisma.spell.upsert({
    where: { name: 'Fireball' },
    update: {},
    create: {
      description: 'Hurl a fireball at your enemy',
      name: 'Fireball',
      spellType: 'FIREBALL'
    }
  })
}
