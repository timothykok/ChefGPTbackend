/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Bookmarks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmarks" ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_url_key" ON "Bookmarks"("url");
