import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    otp: {
      type: String,
      trim: true,
    },
    verifiedEmail: {
      type: Boolean,
      trim: true,
      default: "false",
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },

  { timestamps: true }
);

const userModel = model("user", userSchema);

export default userModel;
