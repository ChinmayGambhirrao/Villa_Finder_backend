import express from "express";
import Villa from "../models/Villa.js";
import sampleVillas from "../data/sampleVillas.js";

const router = express.Router();

// Route to get all villas with optional filters
router.get("/", async (req, res) => {
  try {
    const { location, minPrice, maxPrice } = req.query;

    // Use sample data instead of external API
    let filteredVillas = [...sampleVillas];

    // Apply location filter if provided
    if (location) {
      const locationLower = location.toLowerCase();
      filteredVillas = filteredVillas.filter((villa) =>
        villa.location.toLowerCase().includes(locationLower)
      );
    }

    // Apply price range filter if provided
    if (minPrice) {
      filteredVillas = filteredVillas.filter(
        (villa) => villa.price >= Number(minPrice)
      );
    }

    if (maxPrice) {
      filteredVillas = filteredVillas.filter(
        (villa) => villa.price <= Number(maxPrice)
      );
    }

    // Return filtered villas
    res.status(200).json(filteredVillas);
  } catch (error) {
    console.error("Server error:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching villas", error: error.message });
  }
});

// Route to add a new villa
router.post("/add", async (req, res) => {
  try {
    const { name, location, price, bedrooms, bathrooms, image, amenities } =
      req.body;

    const villa = new Villa({
      name,
      location,
      price,
      bedrooms,
      bathrooms,
      image,
      amenities,
    });

    await villa.save();
    res.status(201).json({ message: "Villa added successfully", villa });
  } catch (error) {
    res.status(500).json({ message: "Error adding villa", error });
  }
});

export default router;
