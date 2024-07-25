// Imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.mjs';
import videosRoute from './routes/videosRoute.mjs';
import progressRoute from './routes/progressRoute.mjs';
import Progress from './models/progressSchema.mjs';
import Videos from './models/videosSchema.mjs';
import progressCollection from './utilities/progressData.mjs';
import videosCollection from './utilities/videoData.mjs';

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

// // Create a seed route to fill our database with data
// app.get('/seed', async (req, res) => {
//     try {
//     // To clear database before filling it with new data
//     await Videos.deleteMany({});
//     // Populate database with videos
//     await Videos.create(videosCollection);
//     // To clear database before filling it with new data
//     await Progress.deleteMany({});
//     // Populate database with Progress cards
//     await Progress.create(progressCollection);
//     res.send('Seeding Database');
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: 'Seeding Database Unsuccessful' });
//     }
// });

// Error Checking Middleware
app.use((err, _req, res, next) => {
    res.status(500).json({ msg: 'You have encountered an error. Please try again' });
})

// Listen to the express server
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
