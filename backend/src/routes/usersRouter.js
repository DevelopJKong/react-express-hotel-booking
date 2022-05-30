import express from "express";
import { createUser } from "../controllers/usersController";

const usersRouter = express.Router();

//UPDATE
usersRouter.put("/:id",updateUser);
//DELETE
usersRouter.delete("/:id",deleteUser);
//GET
usersRouter.get("/:id",getUser);
//GET ALL
usersRouter.get("/",getUsers);


export default usersRouter;