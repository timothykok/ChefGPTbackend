import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = express.Router();

router.use(express.json());

router.post('/', async (req, res) => {
  const { url } = req.body; // Get url from req.body

  const newRecipe = await prisma.recipe.create({
    data: {
      url: url,
    },
  });

  res.json(newRecipe);
});

router.get('/', async (req, res) => {
  const recipes = await prisma.recipe.findMany();
  res.json(recipes);
});


router.post("/delete", async (req, res) => {
  const data = req.body;
  const deleteCalendar = await prisma.recipe.deleteMany({})
  console.log("done")
  return res.status(200);
});

export default router;