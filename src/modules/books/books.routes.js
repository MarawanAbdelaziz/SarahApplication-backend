import express from "express";
import * as bookController from "./controllers/books.controller.js";


const bookRouter = express.Router();

bookRouter.post("/", bookController.createBook);
bookRouter.get("/allBooks", bookController.allBooks);
bookRouter.get("/:id", bookController.getBook);
bookRouter.patch("/:id", bookController.updateBook);
bookRouter.delete("/:id", bookController.deletegetBook);

export default bookRouter;
