import express from "express";
import * as bonusController from "./controllers/bonus.controller.js";


const bonusRouter = express.Router();

bonusRouter.get("/allBooksAndAuthors", bonusController.allBooksAndAuthors);

export default bonusRouter;
