/*
  Warnings:

  - The `breakfast` column on the `Calendar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lunch` column on the `Calendar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dinner` column on the `Calendar` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "breakfast",
ADD COLUMN     "breakfast" JSONB,
DROP COLUMN "lunch",
ADD COLUMN     "lunch" JSONB,
DROP COLUMN "dinner",
ADD COLUMN     "dinner" JSONB;
