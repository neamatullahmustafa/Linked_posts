import { Router } from "express";
import { logIn, register } from "./user.controller.js";
import chickEmailExists from "../../middlewares/chickEmailExists.js";

const userRouter = Router();
userRouter.post("/register", chickEmailExists, register);
userRouter.post("/logIn", logIn);

export default userRouter;
