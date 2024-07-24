import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

export default mongoose.model("Progress", progressSchema);
