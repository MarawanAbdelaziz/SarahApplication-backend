import massageModel from "../../../../DB/models/massage.js";
import userModel from "../../../../DB/models/user.js";

export const createMassage = async (req, res) => {
  try {
    const { content, receiverId } = req.body;

    if (receiverId) {
      const findUser = await userModel.findById({ _id: receiverId });

      if (findUser) {
        req.body.createdBy = req.user._id;

        if (content) {
          const createMassage = await massageModel.create(req.body);
          res.json({ createMassage });
        } else {
          res.status(400).json({ message: "don't forget your content " });
        }
      } else {
        return res.status(404).json({ message: "this user not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const allMassages = async (req, res) => {
  try {
    const messages = await massageModel.find({ createdBy: req.user._id });
    res.json({ messages });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deletegetMessage = async (req, res) => {
  try {
    const _id = req.params.id;
    const findMessage = await massageModel.findByIdAndDelete({ _id });

    if (findMessage) {
      res.json({ message: "Message deleted", Message: findMessage });
    } else {
      res.status(404).json({ message: "Message not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Check your id before call Backend", error });
  }
};
