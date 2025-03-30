import mongoose from "mongoose";

const villaSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    image: { type: String, required: true }, // URL of the villa image
    amenities: { type: [String], required: true }, // Array of amenitites
  },
  { timestamps: true }
);

const Villa = mongoose.model("Villa", villaSchema);
export default Villa;
