/*
  Warnings:

  - Added the required column `image` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmarks" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
