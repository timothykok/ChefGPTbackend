/*
  Warnings:

  - You are about to drop the `Calender` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Calender";

-- CreateTable
CREATE TABLE "Calendar" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "breakfast" TEXT,
    "lunch" TEXT,
    "dinner" TEXT,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);
