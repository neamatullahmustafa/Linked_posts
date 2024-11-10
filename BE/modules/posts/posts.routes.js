import { Router } from "express";
import {
  allPosts,
  userPosts,
  updatePost,
  deletePost,
  addPost,
} from "./post.controller.js";
import checkUserExists from "../../middlewares/chickUserExists.js";
import checkPostExists from "../../middlewares/chickPostExists.js";

const postsRouter = Router();
postsRouter.get("/allPosts", allPosts);
postsRouter.get("/userPosts/:id", checkUserExists, userPosts);
postsRouter.post("/addPost", addPost);
postsRouter.put("/updatePost/:id", checkPostExists, updatePost);
postsRouter.delete("/deletePost/:id", checkPostExists, deletePost);

export default postsRouter;
