/*
  Warnings:

  - Changed the type of `userID` on the `Calendar` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "userID",
ADD COLUMN     "userID" INTEGER NOT NULL;
