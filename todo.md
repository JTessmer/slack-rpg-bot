# TODO

This is a temporary TODO list for this project.

These will eventually be converted into Github stories where more details can be added.

## v1.0

### Instantiate Creatures

- Add CreatureTemplate model
  - Holds creature data that can be copied & instantiated as Creature models
- Add endpoint to retrieve a list of CreatureTemplates names + descriptions
- Add endpoint to retrieve full CreatureTemplate data by name
- Add DM-only endpoint to spawn Creature from CreatureTemplate
  - Endpoint expects a CreatureTemplate name and a new unique Creature name

### Player Creatures

- Add ability for player to create a Creature
  - Each player can only have 1 Creature
  - Attributes are set by the player using a point-buy system

### Combat

- Add endpoint to begin combat
  - All instantiated Creatures are included
- Add logic to support rounds & turns
  - Initiative is checked at the start of each round to determine turn order
  - Announce to the channel whose turn it is when a turn begins
- Add current-turn endpoint to re-announce whose turn it currently is
- Add Slack command to call current-turn endpoint
- Build utils to derive armor, max health, skills, etc. from Creature attributes & equipment
- Add endpoint to make an attack with the Creature's weapon
  - Endpoint expects a player name, a target Creature name
  - Endpoint returns an error if it is not the player's turn
  - MVP to-hit logic: 1d20 + weapon toHit - target Creature total armor --> positive value = hit
  - MVP damage logic: roll using weapon sides & dice count; result - target Creature fortitude modifier = damage
  - Displays results in Slack
  - Advances to the next turn
- Add endpoint to remove a player from combat (i.e. for AFK player)
- Add endpoint to add a player to combat (i.e. AFK player returns)
  - Will not be able to move until the next round

## v2.0

### Equipment

- Expand equipment list
  - Expand types to: Head, Chest, Gloves, Legs, Boots, Left Ring, Right Ring, Necklace
- Expand weapon list
  - Expand types to: Sword, Axe, Dagger, Mace, Bow

### Spells & Abilities

- Implement effect for POWER_ATTACK ability
- Implement effect for FIREBALL spell
- Add additional abilities & spells

### Consumables

- Implement Consumable item templates
- Implement Consumable item instances
- Add belt slots to hold consumables
- Add endpoint to use a consumable / decrement remaining uses
  - Item is removed when remaining uses === 0

## v3.0

### Advancement

- Add level & experience to Creature model
- Add gold/currency to Creature model
- Add backpack to hold multiple weapons/equipment
