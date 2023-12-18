import express from "express";
import prisma from "../utils/prisma.js";
const router = express.Router();

// Add recipe to calendar
router.post("/add", async (req, res) => {
  const data = req.body;

  const calendar = await prisma.calendar.create({
    data,
  });

  return res.status(200);
});

// Fetch recipe from calendar
router.post("/fetch", async (req, res) => {
  const data = req.body;
  const calendarRead = await prisma.calendar.findFirst({
    where: {
      userID: data.userID,
      date: data.date,

    },
  })
  return res.json({calendarRead});
});

// Delete recipe from calender
router.post("/delete", async (req, res) => {
  const data = req.body;
  const deleteCalendar = await prisma.user.deleteMany({})
  console.log("done")
  return res.status(200);
});

export default router;
