import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/usersController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const usersRouter = express.Router();

//UPDATE
usersRouter.put("/:id([0-9a-f]{24})", verifyUser, updateUser);
//DELETE
usersRouter.delete("/:id([0-9a-f]{24})", verifyUser, deleteUser);
//GET
usersRouter.get("/:id([0-9a-f]{24})", verifyUser, getUser);
//GET ALL
usersRouter.get("/", verifyAdmin, getUsers);

export default usersRouter;
