import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
 import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from './routes/adminRoute.js'
import { doctorList } from './controllers/doctorControler.js';

// app config
//const express= require('express');

const app = express()
//const express()=require('express')
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
// app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use('/api/admin',adminRouter)

app.get("/api/doctor/list", doctorList); // Added route for fetching doctors

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))