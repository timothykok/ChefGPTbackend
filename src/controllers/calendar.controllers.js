import express from "express";
import prisma from "../utils/prisma.js";
const router = express.Router();

// Add recipe to calendar
router.post("/add", async (req, res) => {
  const data = req.body;
  console.log(data)

  const calendar = await prisma.calendar.create({
    data,
  });

  return res.json({"message" : "success"});
});

// Fetch recipe from calendar by user
router.post("/fetch", async (req, res) => {
  const data = req.body;
  const calendarRead = await prisma.calendar.findMany({
    where: {
      userID: data.userID
    }
  })
  return res.json(calendarRead);
});



// Delete recipe from calender
router.post("/delete", async (req, res) => {
  const data = req.body;
  const deleteCalendar = await prisma.calendar.deleteMany({})
  console.log("done")
  return res.status(200);
});

export default router;
