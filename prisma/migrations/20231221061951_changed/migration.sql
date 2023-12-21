/*
  Warnings:

  - You are about to drop the column `breakfast` on the `Calendar` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `Calendar` table. All the data in the column will be lost.
  - You are about to drop the column `dinner` on the `Calendar` table. All the data in the column will be lost.
  - You are about to drop the column `lunch` on the `Calendar` table. All the data in the column will be lost.
  - Added the required column `kcal` to the `Calendar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meal` to the `Calendar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Calendar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "breakfast",
DROP COLUMN "day",
DROP COLUMN "dinner",
DROP COLUMN "lunch",
ADD COLUMN     "kcal" TEXT NOT NULL,
ADD COLUMN     "meal" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
