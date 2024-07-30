// Imports
import Goals from '../models/goalsSchema.mjs';

// Function to create new goal
const CreateGoals = async (req, res) => {
    try {
        // Create a new instance of Goals with the data from req.body
        let newGoals = new Goals(req.body);
        // Save the new goal to mongodb
        await newGoals.save();
        // Send new goal as a response
        res.json(newGoals);
    } catch (err) {
        // Catch any errors
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};
// function to read all goals
const ReadGoals = async (req, res) => {
    try {
        // Find all goals in mongodb
        const allGoals = await Goals.find({});
        // Send those goals as a response
        res.json(allGoals);
    } catch (err) {
        // Catch any errors
        console.error(err);
        // Send a status and message of the error
        res.status(500).json({ msg: 'Server Error' });
    }
};
// Function to update a goal
const UpdateGoals = async (req, res) => {
    try {
        // Find the goal with an ID and update it with the data from req.body
        const updatedGoals = await Goals.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Send the updated goal as a response
        res.json(updatedGoals);
    } catch (err) {
        // Catch any errors
        console.error(err);
        // Send a status and message of the error
        res.status(500).json({ msg: 'Server Error' });
    }
};
// Function to delete a goal
const DeleteGoals = async (req, res) => {
    try {
        // Find the goal with an id and delete it
        await Goals.findByIdAndDelete(req.params.id);
        // Send a message if successful
        res.status(200).json({ msg: 'Goals Deleted' });
    } catch (err) {
        // catch any errors and send a response with a message
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

export default { CreateGoals, ReadGoals, UpdateGoals, DeleteGoals };
