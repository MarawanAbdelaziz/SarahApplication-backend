import mongoose from "mongoose";

const { Schema, model } = mongoose;

const massageSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    receiverId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const massageModel = model("massage", massageSchema);
export default massageModel;
