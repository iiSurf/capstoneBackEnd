// Imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.mjs';
import videosRoute from './routes/videosRoute.mjs';
import progressRoute from './routes/progressRoute.mjs';
import goalsRoute from './routes/goalsRoute.mjs';
import progressCollection from './utilities/progressData.mjs';
import videosCollection from './utilities/videosData.mjs';
import goalsCollection from './utilities/goalsData.mjs';
import Progress from './models/progressSchema.mjs';
import Videos from './models/videosSchema.mjs';
import Goals from './models/goalsSchema.mjs';

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
app.get('/', (req, res) => {
    res.send('Welcome to the Homepage!');
})

app.use('/front/progress', progressRoute);
app.use('/front/videos', videosRoute);
app.use('/front/goals', goalsRoute);

// // Create a seed route to fill our database with data
// app.get('/seed', async (req, res) => {
//     try {
//     // To clear database before filling it with new data
//     await Videos.deleteMany({});
//     await Progress.deleteMany({});
//     // await Goals.deleteMany({});
//     // Populate database with new data
//     await Videos.create(videosCollection);
//     await Progress.create(progressCollection);
//     await Goals.create(goalsCollection);
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
