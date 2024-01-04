/*
  Warnings:

  - You are about to drop the column `userId` on the `Bookmarks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userID]` on the table `Bookmarks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userID` to the `Bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_userId_fkey";

-- DropIndex
DROP INDEX "Bookmarks_userId_key";

-- AlterTable
ALTER TABLE "Bookmarks" DROP COLUMN "userId",
ADD COLUMN     "userID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_userID_key" ON "Bookmarks"("userID");

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
