import express from "express";
import { verifyAccessToken } from "../utils/jwt.js"; 

const router = express.Router();

router.get("/", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({
      error: "No token provided",
    });
  }

  const token = authHeader.split(" ")[1]; 

  try {
    const user = await verifyAccessToken(token); 
    return res.status(200).send({
      message: "User is logged in",
      user,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(401).send({
      error: "Invalid token",
    });
  }
});

export default router;