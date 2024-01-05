import express from "express";
import prisma from "../utils/prisma.js";
const router = express.Router();
import { getUserId } from "../middlewares/auth.js";

// Add recipe to bookmark page
router.post("/add", async (req, res) => {
  const data = req.body;
  console.log(data)

  const bookmark = await prisma.bookmarks.create({
    data,
  });

  return res.json({"message" : "success"});
});

// Fetch recipe from bookmark page
router.get("/fetch", async (req, res) => {
    const userID = req.query.userID;
    const bookmarkRead = await prisma.bookmarks.findMany({
      where: {
        userID: parseInt(userID), // Assuming userID is an integer
      },
    });
  
    return res.json(bookmarkRead);
  });




// Delete recipe from bookmarks

router.delete("/delete", async (req, res) => {
    const data = req.query;

    const bookmarkRead = await prisma.bookmarks.delete({
        where: {
            url: data.bookmarkURL,
            userID: parseInt(data.userID),
        },
    });
   
    console.log(bookmarkRead);
    console.log("done");
    return res.status(200).json({ message: "Bookmark deleted successfully" });
});


router.delete("/deleteAll", async (req, res) => {
    const data = req.body;
    const bookmarkRead = await prisma.bookmarks.deleteMany({
     

    })
    console.log("done")
    return res.status(200);
  });
export default router;
