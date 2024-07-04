import express from "express";
import * as authorController from "./controllers/authors.controller.js";

const authorRouter = express.Router();

authorRouter.post("/", authorController.createAuthor);
authorRouter.get("/allAuthors", authorController.allAuthors);
authorRouter.get("/:id", authorController.getAuthor);
authorRouter.patch("/:id", authorController.updateAuthor);
authorRouter.delete("/:id", authorController.deletegetAuthor);

export default authorRouter;
