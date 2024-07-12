import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/SarahApplication")
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Unable to connect to database", error));
};

export default connectDB;
