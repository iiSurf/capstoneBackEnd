// Imports
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Set Up
dotenv.config();
const db = process.env.MONGO_URI;

// Connection Function
const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('Mongoose DB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
