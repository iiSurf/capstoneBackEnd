// Imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.mjs';
import videosRoute from './routes/videosRoute.mjs';
import progressRoute from './routes/progressRoute.mjs';

// Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/progress', progressRoute);
app.use('/videos', videosRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the Homepage!');
})

// Error Checking Middleware
app.use((err, _req, res, next) => {
    res.status(500).json({ msg: 'You have encountered an error. Please try again' });
})

// Listen to the express server
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
