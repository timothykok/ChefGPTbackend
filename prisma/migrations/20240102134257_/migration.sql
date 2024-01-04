/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Bookmarks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[recipeId]` on the table `Bookmarks` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Bookmarks_userId_recipeId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_userId_key" ON "Bookmarks"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_recipeId_key" ON "Bookmarks"("recipeId");
