import type { PrismaClient } from '@prisma/client'

export async function seedEquipment(prisma: PrismaClient) {
  console.log('--- Seeding Equipment ---')

  const leatherVest = await prisma.equipment.upsert({
    where: { name: 'Leather Vest' },
    update: {},
    create: {
      name: 'Leather Vest',
      armor: 1,
      description: 'A worn leather vest',
      slot: 'CHEST'
    }
  })

  console.log({ leatherVest })
}
