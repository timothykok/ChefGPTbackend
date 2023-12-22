import express from "express"
import userRouter from "./src/controllers/users.controllers.js"
import authRouter from "./src/controllers/auth.controllers.js"
import authrefreshRouter from "./src/controllers/auth-refresh.controllers.js"
import recipeRouter from "./src/controllers/recipe.controllers.js"
import morgan from "morgan" 
import cors from "cors";

const app = express()
app.use(express.json())
app.use(morgan('combined')) 
app.use(cors());

app.use('/users', userRouter)

app.use('/auth', authRouter)

app.use('/auth-refresh', authrefreshRouter)

app.use('/recipe', recipeRouter);



export default app




