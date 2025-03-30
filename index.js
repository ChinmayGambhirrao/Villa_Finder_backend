import express from "express";
import connectDB from "./config/db.js"; // Import DB Connection
import dotenv from "dotenv";
import cors from "cors";
import villaRoutes from "./routes/villaRoutes.js"; // Import villa routes

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Villa Finder API" });
});

// Routes
app.use("/api/villas", villaRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
