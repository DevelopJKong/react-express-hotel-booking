import express from "express";
import { join, register } from "../controllers/authController.js";


const authRouter = express.Router();

authRouter.post("/register",register);
authRouter.post("/join",join);

export default authRouter;