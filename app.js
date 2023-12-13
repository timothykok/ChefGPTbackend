import express from "express"
import userRouter from "./src/controllers/users.controllers.js"
import authRouter from "./src/controllers/auth.controllers.js"
import morgan from "morgan" 
import cors from "cors";

const app = express()
app.use(express.json())
app.use(morgan('combined')) 
app.use(cors());

// Sign up Router
app.use('/users/new', userRouter)

// Log in Router
app.use('/users/login', authRouter)

export default app




