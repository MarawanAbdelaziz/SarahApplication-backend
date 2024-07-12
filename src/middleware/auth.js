import jwt from "jsonwebtoken";
import userModel from "../../DB/models/user.js";

const auth = async (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    const decoded = jwt.verify(token, "Mero12345");
    const user = await userModel.findOne({ _id: decoded.id });

    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(404).json({ message: "invalid user" });
    }
  } else {
    return res.status(400).json({ message: "Give me your token" });
  }
};

export default auth;
