import express from "express";
import { createHotel, updateHotel } from "../controllers/hotelsController.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/",createHotel);

//UPDATE
hotelsRouter.put("/:id" ,updateHotel);


//DELETE


//GET


//GET ALL


export default hotelsRouter;