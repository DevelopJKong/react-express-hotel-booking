import express from "express";
import { hello } from "../controllers/authController.js";


const authRouter = express.Router();

authRouter.get("/",hello);

export default authRouter;