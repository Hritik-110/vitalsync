import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from './routes/adminRoute.js';

const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = [
  "https://vitalsync-dusky.vercel.app",
  "https://vitalsync-bu4m.vercel.app",
  "http://localhost:3000" // for local testing
];

// ✅ Global CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// ✅ Handle all OPTIONS requests
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ JSON parser
app.use(express.json());

// ✅ Connect DB & Cloudinary
connectDB();
connectCloudinary();

// ✅ Routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));
