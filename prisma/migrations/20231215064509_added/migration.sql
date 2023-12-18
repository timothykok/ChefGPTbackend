-- CreateTable
CREATE TABLE "Calender" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "breakfast" TEXT,
    "lunch" TEXT,
    "dinner" TEXT,

    CONSTRAINT "Calender_pkey" PRIMARY KEY ("id")
);
