import mongoose from "mongoose";

const goalsSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
});

export default mongoose.model("Goals", goalsSchema);
