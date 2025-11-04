// server/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("✅ Server is running...");
});

app.listen(port, () => {
  console.log(`🚀 Server running at port ${port}`);
});
