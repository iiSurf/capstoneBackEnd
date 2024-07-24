import Progress from '../models/progressSchema.mjs';

// Functions
const CreateProgress = async (req, res) => {
    try {
        let newProgress = new Progress(req.body);
        await newProgress.save();
        res.json(newProgress);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const ReadProgress = async (req, res) => {
    try {
        const allProgress = await Progress.find({});
        res.json(allProgress);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const UpdateProgress = async (req, res) => {
    try {
        const updatedProgress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProgress);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const DeleteProgress = async (req, res) => {
    try {
        await Progress.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: 'Progress Deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

export default { CreateProgress, ReadProgress, UpdateProgress, DeleteProgress };
