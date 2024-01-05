/*
  Warnings:

  - You are about to drop the column `recipeId` on the `Bookmarks` table. All the data in the column will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_userId_fkey";

-- DropIndex
DROP INDEX "Bookmarks_recipeId_key";

-- AlterTable
ALTER TABLE "Bookmarks" DROP COLUMN "recipeId";

-- DropTable
DROP TABLE "Recipe";
