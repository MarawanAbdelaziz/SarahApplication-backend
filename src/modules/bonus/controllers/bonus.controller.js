import author from "../../../../DB/models/authors.js";
import book from "../../../../DB/models/books.js";

export const allBooksAndAuthors = async (req, res) => {
  try {
    const authors = await author.find().limit(req.body.NumberOfAuthor);
    const books = await book.find().limit(req.body.NumberOfBooks);

    res.json({ books, authors });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
