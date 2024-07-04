import author from "../../../../DB/models/authors.js";

author;

export const createAuthor = async (req, res) => {
  try {
    const { name, bio, birthDate } = req.body;

    req.body.name = name.trim();
    req.body.bio = bio.trim();
    req.body.birthDate = birthDate.trim();

    const findAuthor = await author.findOne({ name });
    if (!findAuthor) {
      const createAuthor = await author.create(req.body);
      res.status(201).json({ author: createAuthor });
    } else {
      res.status(409).json({ message: "auther name exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const allAuthors = async (req, res) => {
  try {
    const authors = await author.find().populate("books");
    res.json({ authors });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getAuthor = async (req, res) => {
  try {
    const _id = req.params.id;
    const findAuthor = await author.findById({ _id }).populate("books");

    if (findAuthor) {
      res.json({ author: findAuthor });
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Check your id before call Backend", error });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const _id = req.params.id;
    const findAuthor = await author
      .findByIdAndUpdate({ _id }, { $set: req.body })
      .populate("books");

    if (findAuthor) {
      res.json({ author: findAuthor });
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Check your id before call Backend", error });
  }
};

export const deletegetAuthor = async (req, res) => {
  try {
    const _id = req.params.id;
    const findAuthor = await author.findByIdAndDelete({ _id });

    if (findAuthor) {
      res.json({ message: "Author deleted", author: findAuthor });
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Check your id before call Backend", error });
  }
};
