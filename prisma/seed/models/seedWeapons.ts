import type { PrismaClient } from '@prisma/client'

export async function seedWeapons(prisma: PrismaClient) {
  console.log('--- Seeding Weapons ---')

  const ironSword = await prisma.weapon.upsert({
    where: { name: 'Iron Sword' },
    update: {},
    create: {
      name: 'Iron Sword',
      description: 'A basic iron sword',
      playerUsable: true,
      type: 'SWORD',
      toHit: 0,
      damageDieSides: 1,
      damageDieCount: 6
    }
  })

  console.log({ ironSword })
}
