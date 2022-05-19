import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelsController.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/",createHotel);

//UPDATE
hotelsRouter.put("/:id" ,updateHotel);

//DELETE
hotelsRouter.delete("/:id",deleteHotel);

//GET
hotelsRouter.get("/:id",getHotel);

//GET ALL
hotelsRouter.get("/",getAllHotel);


export default hotelsRouter;