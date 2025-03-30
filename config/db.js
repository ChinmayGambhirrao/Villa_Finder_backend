import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // Exits process if connection fails
    }
}

export default connectDB;