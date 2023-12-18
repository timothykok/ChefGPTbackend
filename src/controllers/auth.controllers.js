import express from "express";
import bcrypt from "bcryptjs";
import prisma from "../utils/prisma.js";
import { validateLogin } from "../validators/auth.js";
import { filter } from "../utils/common.js";
import { signAccessToken } from "../utils/jwt.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  const validationErrors = validateLogin(data);
  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return res.status(401).send({
        error: "Email address or password not valid",
      });
    }

    let checkPassword = bcrypt.compareSync(data.password, user.password);
    if (!checkPassword) {
      return res.status(401).send({
        error: "Email address or password is incorrect",
      });
    }


    const userFiltered = filter(user, "id", "name", "email");
    const accessToken = await signAccessToken(userFiltered);

    let result = {
      token: accessToken,
      Id: user.id,
    };

    return res.json({ result });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
});

export default router;