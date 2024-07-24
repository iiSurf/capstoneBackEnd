import Videos from '../models/videosSchema.mjs';

// Functions
const CreateVideos = async (req, res) => {
    try {
        let newVideos = new Videos(req.body);
        await newVideos.save();
        res.json(newVideos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const ReadVideos = async (req, res) => {
    try {
        const allVideos = await Videos.find({});
        res.json(allVideos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const UpdateVideos = async (req, res) => {
    try {
        const updatedVideos = await Videos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedVideos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

const DeleteVideos = async (req, res) => {
    try {
        await Videos.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: 'Video has been deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

export default { CreateVideos, ReadVideos, UpdateVideos, DeleteVideos };
