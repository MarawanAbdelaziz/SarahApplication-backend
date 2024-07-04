import mongoose from "mongoose";

const { Schema, model } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  authorId: {
    type: Schema.Types.ObjectId,
    ref: "author",
    required: true,
  },

  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const book = model("book", bookSchema);
export default book;
