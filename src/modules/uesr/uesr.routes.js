import express from "express";
import * as authorController from "./controllers/uesr.controller.js";
import auth from "../../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/", authorController.register);
userRouter.get("/", authorController.login);
userRouter.get("/users", auth, authorController.getUsers);

export default userRouter;
