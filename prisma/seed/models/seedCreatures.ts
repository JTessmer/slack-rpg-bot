import util from 'util'
import type { PrismaClient } from '@prisma/client'

export async function seedCreatures(prisma: PrismaClient) {
  console.log('--- Seeding Creatures ---')

  try {
    const spellFireball = await prisma.spell.findUniqueOrThrow({ where: { name: 'Fireball' } })
    const talentPowerAttack = await prisma.talent.findUniqueOrThrow({
      where: { name: 'Power Attack' }
    })
    const equipVest = await prisma.equipment.findUniqueOrThrow({ where: { name: 'Leather Vest' } })
    const weaponSword = await prisma.weapon.findUniqueOrThrow({ where: { name: 'Iron Sword' } })

    await prisma.creature.upsert({
      where: { name: 'Fighter' },
      update: {},
      create: {
        name: 'Fighter',
        health: 10,
        class: 'FIGHTER',
        race: 'HUMAN',
        spells: { connect: { id: spellFireball.id } },
        talents: { connect: { id: talentPowerAttack.id } },
        equipment: { connect: { id: equipVest.id } },
        weapon: { connect: { id: weaponSword.id } },
        strength: 12,
        intelligence: 8,
        dexterity: 9,
        fortitude: 11
      }
    })

    const fighter = await prisma.creature.findUniqueOrThrow({
      where: { name: 'Fighter' },
      include: { spells: true, talents: true, equipment: true, weapon: true }
    })

    console.log(util.inspect({ fighter }, false, null, true))
  } catch (e) {
    console.log(e)
  }
}
