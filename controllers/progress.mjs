import Progress from '../models/progressSchema.mjs';

//Functions
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
        //Get data and save to allProgress
        const allProgress = await Progress.find({});
        //Send data to front end: res
        res.json(allProgress);

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const UpdateProgress = async (req, res) => {
    try {
        const updateProgress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true,});
        res.json(updateProgress);

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
        res.status(500).json({ msg: 'Server Error'});
    }
};

export default {CreateProgress, ReadProgress, UpdateProgress, DeleteProgress };