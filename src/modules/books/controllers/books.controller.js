import author from "../../../../DB/models/authors.js";
import book from "../../../../DB/models/books.js";

export const createBook = async (req, res) => {
  try {
    const { title, content, authorId, publishedDate } = req.body;

    req.body.title = title.trim();
    req.body.content = content.trim();
    req.body.authorId = authorId.trim();
    req.body.publishedDate = publishedDate.trim();

    const findBook = await book.findOne({ title });
    if (!findBook) {
      const createBook = await book.create(req.body);

      await author.findOneAndUpdate(
        { _id: authorId },
        { $push: { books: createBook._id } }
      );

      res.status(201).json({ book: createBook });
    } else {
      res.status(409).json({ message: "Book title exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const allBooks = async (req, res) => {
  try {
    const books = await book.find();
    res.json({ books: books });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getBook = async (req, res) => {
  try {
    const _id = req.params.id;
    const findBook = await book.findById({ _id }).populate("authorId");

    if (findBook) {
      res.json({ book: findBook });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Check your id before call Backend", error });
  }
};

export const updateBook = async (req, res) => {
  try {
    const _id = req.params.id;
    const findBook = await book.findByIdAndUpdate({ _id }, { $set: req.body });

    if (findBook) {
      res.json({ message: "Book updated" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Check your id before call Backend", error });
  }
};

export const deletegetBook = async (req, res) => {
  try {
    const _id = req.params.id;
    const findBook = await book.findByIdAndDelete({ _id });

    if (findBook) {
      res.json({ message: "Book deleted", book: findBook });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Check your id before call Backend", error });
  }
};
