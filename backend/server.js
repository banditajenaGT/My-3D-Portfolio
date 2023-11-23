import express from "express"
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js"
import { userRouter } from "./routes/user.js";
import cookieParser from "cookie-parser";
import cloudinary from 'cloudinary'
import path from 'path'

const app = express()

dotenv.config({ path: "./backend/config/config.env" })

connectDatabase()

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true,limit:"50mb"}))
app.use(cookieParser())

app.use("/api/v1", userRouter)

app.use(express.static(path.join("../frontend/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve("../frontend/build/index.html"))
})

 
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on: http://localhost:${process.env.PORT}`)
})