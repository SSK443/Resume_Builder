

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodb_uri = process.env.MONGODB_URI;
    const projectName = "AI-Resume-Builder";

    if (!mongodb_uri) {
      throw new Error("❌ MONGODB_URI environment variable not set");
    }

    // Log connection events
    mongoose.connection.on("connected", () => {
      console.log("✅ Database connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ Database connection error:", err);
    });

    // Connect to MongoDB
    await mongoose.connect(`${mongodb_uri}/${projectName}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
