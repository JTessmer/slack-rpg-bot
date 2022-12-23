import { dbClient } from '~/database'

export class Creature {
  /** Fetches the full creature data by name */
  static async getByName(name: string) {
    return await dbClient().creature.findFirst({
      where: { name },
      include: {
        equipment: true,
        spells: true,
        talents: true,
        weapon: true
      }
    })
  }

  /** Fetches the full creature data by player name */
  static async getByPlayerName(playerName: string) {
    return await dbClient().creature.findFirst({
      where: { playerName },
      include: {
        equipment: true,
        spells: true,
        talents: true,
        weapon: true
      }
    })
  }

  /** Fetches a list of all creature names */
  static async getNameList() {
    return await dbClient().creature.findMany({
      select: {
        id: true,
        name: true
      }
    })
  }
}
