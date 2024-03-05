/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Singer` table. All the data in the column will be lost.
  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Song` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_singerId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_singerId_fkey";

-- AlterTable
ALTER TABLE "Singer" DROP COLUMN "imageUrl";

-- DropTable
DROP TABLE "Album";

-- DropTable
DROP TABLE "Song";
