/*
  Warnings:

  - You are about to drop the `GameGender` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gender` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `GameGender` DROP FOREIGN KEY `GameGender_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `GameGender` DROP FOREIGN KEY `GameGender_genderId_fkey`;

-- DropTable
DROP TABLE `GameGender`;

-- DropTable
DROP TABLE `Gender`;

-- CreateTable
CREATE TABLE `GameGener` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gameId` INTEGER NOT NULL,
    `generId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gener` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Gener_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GameGener` ADD CONSTRAINT `GameGener_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Games`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameGener` ADD CONSTRAINT `GameGener_generId_fkey` FOREIGN KEY (`generId`) REFERENCES `Gener`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
