//  imports
import Videos from '../models/videosSchema.mjs';

// Functions
// create new videos
const CreateVideos = async (req, res) => {
    try {
        // create new instance of videos with data from req.body
        let newVideos = new Videos(req.body);
        // save videos to db
        await newVideos.save();
        res.json(newVideos);
    } catch (err) {
        // catch errors
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};
// read all videos
const ReadVideos = async (req, res) => {
    try {
        // Find all videos
        const allVideos = await Videos.find({});
        // Send retrieved videos as a response
        res.json(allVideos);
    } catch (err) {
        // Catch erros and tell status and message
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};
// update videos by id
const UpdateVideos = async (req, res) => {
    try {
        // find video with id from req.body
        const updatedVideos = await Videos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // send video that is updated as a response
        res.json(updatedVideos);
    } catch (err) {
        // catch error
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// delete video by id
const DeleteVideos = async (req, res) => {
    try {
        // find video by id
        await Videos.findByIdAndDelete(req.params.id);
        // if successful then send status and error message
        res.status(200).json({ msg: 'Video has been deleted' });
    } catch (err) {
        // if unsuccessful send status and error message
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// exports
export default { CreateVideos, ReadVideos, UpdateVideos, DeleteVideos };
