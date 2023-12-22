import express from "express";
import bcrypt from "bcryptjs";
import prisma from "../utils/prisma.js";
import { validateLogin } from "../validators/auth.js";
import { filter } from "../utils/common.js";
import { signAccessToken } from "../utils/jwt.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  const validationErrors = validateLogin(data);
  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

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
});

router.post("/authenticate",auth, async (req, res) => {
  return res.json({'Authentication': 'success'})
  });

export default router;
