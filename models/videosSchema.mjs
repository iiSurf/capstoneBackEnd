import mongoose from 'mongoose';

const videosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

export default mongoose.model('Videos', videosSchema);
