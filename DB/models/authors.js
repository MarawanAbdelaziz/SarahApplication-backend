import mongoose from "mongoose";

const { Schema, model } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: String,
  birthDate: Date,
  books: [{ type: Schema.Types.ObjectId, ref: "book" }],
});

const author = model("author", authorSchema);

export default author;
