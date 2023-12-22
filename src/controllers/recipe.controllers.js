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

export default router;