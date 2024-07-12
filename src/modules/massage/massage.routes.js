import express from "express";
import * as MC from "./controllers/massage.controller.js";
import auth from "../../middleware/auth.js";

const massageRouter = express.Router();

massageRouter.post("/", auth, MC.createMassage);
massageRouter.get("/allMassages", auth, MC.allMassages);
massageRouter.delete("/:id", auth, MC.deletegetMessage);

export default massageRouter;
