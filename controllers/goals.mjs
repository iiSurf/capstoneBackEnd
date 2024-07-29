import Goals from '../models/goalsSchema.mjs';

// Functions
const CreateGoals = async (req, res) => {
    try {
        let newGoals = new Goals(req.body);
        await newGoals.save();
        res.json(newGoals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const ReadGoals = async (req, res) => {
    try {
        const allGoals = await Goals.find({});
        res.json(allGoals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const UpdateGoals = async (req, res) => {
    try {
        const updatedGoals = await Goals.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedGoals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const DeleteGoals = async (req, res) => {
    try {
        await Goals.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: 'Goals Deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

export default { CreateGoals, ReadGoals, UpdateGoals, DeleteGoals };
