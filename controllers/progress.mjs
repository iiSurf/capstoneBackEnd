// Imports
import Progress from '../models/progressSchema.mjs';

// Functions
// Create new progress
const CreateProgress = async (req, res) => {
    try {
        // Create a new instance of progress from req.body
        let newProgress = new Progress(req.body);
        // Save the new progress to the db
        await newProgress.save();
        res.json(newProgress);
    } catch (err) {
        // Catch the errors and send status and message
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};
// read all properties
const ReadProgress = async (req, res) => {
    try {
        // find all progress in db
        const allProgress = await Progress.find({});
        res.json(allProgress);
    } catch (err) {
        // catch any errors and send status and message
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};
// update a progress by id
const UpdateProgress = async (req, res) => {
    try {
        // find the progress entry by id and update it from req.body
        const updatedProgress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProgress);
    } catch (err) {
        // cath the errors with status and message
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};
// delete progress by ID
const DeleteProgress = async (req, res) => {
    try {
        // Find the progress by id and delete it
        await Progress.findByIdAndDelete(req.params.id);
        // if successful send a message and status
        res.status(200).json({ msg: 'Progress Deleted' });
    } catch (err) {
        // if unsuccessful send a message and status
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// exports
export default { CreateProgress, ReadProgress, UpdateProgress, DeleteProgress };
