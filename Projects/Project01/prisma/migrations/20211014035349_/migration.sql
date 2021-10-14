/*
  Warnings:

  - You are about to drop the `GameGener` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gener` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `GameGener` DROP FOREIGN KEY `GameGener_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `GameGener` DROP FOREIGN KEY `GameGener_generId_fkey`;

-- DropTable
DROP TABLE `GameGener`;

-- DropTable
DROP TABLE `Gener`;

-- CreateTable
CREATE TABLE `GameGenre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gameId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genre_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GameGenre` ADD CONSTRAINT `GameGenre_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Games`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameGenre` ADD CONSTRAINT `GameGenre_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
