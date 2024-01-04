import express from "express";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma.js";
import { validateUser } from "../validators/users.js";
import { filter } from "../utils/common.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { passwordConfirm, ...data } = req.body;

  const validationErrors = validateUser(data);

  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  if (data.password !== passwordConfirm) {
  }

  data.password = bcrypt.hashSync(data.password, 8);

  prisma.user
    .create({
      data,
    })
    .then((user) => {
      return res.json(filter(user, "id", "name", "email"));
    })
    .catch((err) => {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        const formattedError = {};
        formattedError[`${err.meta.target[0]}`] = "already taken";

        return res.status(500).send({
          error: formattedError,
        });
      }
      throw err;
    });
});

router.post("/delete", async (req, res) => {
  const data = req.body;
  const deleteUser = await prisma.user.deleteMany({})
  console.log("done")
  return res.status(200);
});

export default router;
