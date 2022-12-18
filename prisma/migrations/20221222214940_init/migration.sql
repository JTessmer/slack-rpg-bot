-- CreateTable
CREATE TABLE `Talent` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `talentType` ENUM('POWER_ATTACK') NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `Talent_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Creature` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `playerName` VARCHAR(255) NULL,
    `health` SMALLINT NOT NULL,
    `class` ENUM('FIGHTER') NOT NULL,
    `race` ENUM('HUMAN', 'ELF', 'DWARF') NOT NULL,
    `weaponId` INTEGER UNSIGNED NOT NULL,
    `strength` TINYINT NOT NULL DEFAULT 10,
    `intelligence` TINYINT NOT NULL DEFAULT 10,
    `dexterity` TINYINT NOT NULL DEFAULT 10,
    `fortitude` TINYINT NOT NULL DEFAULT 10,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `Creature_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `armor` TINYINT NOT NULL,
    `description` TEXT NOT NULL,
    `slot` ENUM('CHEST') NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `Equipment_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Spell` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `spellType` ENUM('FIREBALL') NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `Spell_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Weapon` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `playerUsable` BOOLEAN NOT NULL DEFAULT true,
    `type` ENUM('SWORD') NOT NULL,
    `toHit` TINYINT NOT NULL,
    `damageDieSides` TINYINT NOT NULL,
    `damageDieCount` TINYINT NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `Weapon_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CreatureToSpell` (
    `A` INTEGER UNSIGNED NOT NULL,
    `B` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `_CreatureToSpell_AB_unique`(`A`, `B`),
    INDEX `_CreatureToSpell_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CreatureToTalent` (
    `A` INTEGER UNSIGNED NOT NULL,
    `B` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `_CreatureToTalent_AB_unique`(`A`, `B`),
    INDEX `_CreatureToTalent_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CreatureToEquipment` (
    `A` INTEGER UNSIGNED NOT NULL,
    `B` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `_CreatureToEquipment_AB_unique`(`A`, `B`),
    INDEX `_CreatureToEquipment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Creature` ADD CONSTRAINT `Creature_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `Weapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CreatureToSpell` ADD CONSTRAINT `_CreatureToSpell_A_fkey` FOREIGN KEY (`A`) REFERENCES `Creature`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CreatureToSpell` ADD CONSTRAINT `_CreatureToSpell_B_fkey` FOREIGN KEY (`B`) REFERENCES `Spell`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CreatureToTalent` ADD CONSTRAINT `_CreatureToTalent_A_fkey` FOREIGN KEY (`A`) REFERENCES `Creature`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CreatureToTalent` ADD CONSTRAINT `_CreatureToTalent_B_fkey` FOREIGN KEY (`B`) REFERENCES `Talent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CreatureToEquipment` ADD CONSTRAINT `_CreatureToEquipment_A_fkey` FOREIGN KEY (`A`) REFERENCES `Creature`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CreatureToEquipment` ADD CONSTRAINT `_CreatureToEquipment_B_fkey` FOREIGN KEY (`B`) REFERENCES `Equipment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
