import express from "express"
import userRouter from "./src/controllers/users.controllers.js"
import authRouter from "./src/controllers/auth.controllers.js"
import authrefreshRouter from "./src/controllers/auth-refresh.controllers.js"
import recipeRouter from "./src/controllers/recipe.controllers.js"
import calendarRouter from "./src/controllers/calendar.controllers.js"
import bookmarkRouter from ".//src/controllers/bookmark.controller.js"

import morgan from "morgan" 
import cors from "cors";

const app = express()
app.use(express.json())
app.use(morgan('combined')) 
app.use(cors());


app.use('/users/new', userRouter)
app.use('/users/login', authRouter)
app.use('/calendar', calendarRouter)
app.use('/auth-refresh', authrefreshRouter)
app.use('/recipe', recipeRouter);
app.use('/bookmark', bookmarkRouter)



export default app




