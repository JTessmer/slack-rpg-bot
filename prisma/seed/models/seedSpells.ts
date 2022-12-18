import type { PrismaClient } from '@prisma/client'

export async function seedSpells(prisma: PrismaClient) {
  console.log('--- Seeding Spells ---')

  const fireball = await prisma.spell.upsert({
    where: { name: 'Fireball' },
    update: {},
    create: {
      description: 'Hurl a fireball at your enemy',
      name: 'Fireball',
      spellType: 'FIREBALL'
    }
  })

  console.log({ fireball })
}
