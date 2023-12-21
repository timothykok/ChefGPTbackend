/*
  Warnings:

  - Changed the type of `kcal` on the `Calendar` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "kcal",
ADD COLUMN     "kcal" INTEGER NOT NULL;
