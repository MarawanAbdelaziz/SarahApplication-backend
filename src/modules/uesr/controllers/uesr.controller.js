import { customAlphabet } from "nanoid";
import userModel from "../../../../DB/models/user.js";
import bcrypt from "bcrypt";
import sendEmail from "../../../service/sednEmail.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      req.body.password = bcrypt.hashSync(password, 4);

      const otpNumber = customAlphabet("0123456789tarekTAREK", 6);

      req.body.otp = otpNumber();

      sendEmail(email, "otp code", `<h1>${req.body.otp}<h1/>`);

      const createUser = await userModel.create(req.body);

      return res.status(201).json({ message: createUser });
    } else {
      return res.status(409).json({ message: "user exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModel.findOne({ email });
    if (findUser) {
      if (bcrypt.compareSync(password, findUser.password)) {
        if (findUser.verifiedEmail) {
          const token = jwt.sign({ id: findUser._id, email }, "Mero12345");
          return res.json({ message: "login succsess", token });
        }
        if (findUser.otp == req.body.otp) {
          const token = jwt.sign({ id: findUser._id, email }, "Mero12345");

          await userModel.findByIdAndUpdate(
            { _id: findUser._id },
            { $set: { verifiedEmail: "true", otp: null } }
          );
          return res.json({ message: "login succsess", token });
        }
        return res.status(400).json({ message: "Incorrect otp" });
      }
      return res.status(400).json({ message: "email or password incorrect" });
    }
    return res.status(400).json({ message: "email or password incorrect" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getUsers = async (req, res) => {
  const users = await userModel.find();

  res.json({ users });
};
