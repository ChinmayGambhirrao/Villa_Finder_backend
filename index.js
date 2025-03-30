import express from "express";
import connectDB from "./config/db.js"; // Import DB Connection
import dotenv from "dotenv";
import cors from "cors";
import villaRoutes from "./routes/villaRoutes.js"; // Import villa routes
import userRoutes from "./routes/userRoutes.js"; // Import user routes

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://villa-finder-frontend.vercel.app", // Your Vercel app domain
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Villa Finder API" });
});

// Routes
app.use("/api/villas", villaRoutes);
app.use("/api/users", userRoutes); // Add user routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
