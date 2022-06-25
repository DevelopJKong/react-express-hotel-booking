import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/roomsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomsRouter = express.Router();

//CREATE
roomsRouter.post("/:hotelId",verifyAdmin,createRoom);

//UPDATE
roomsRouter.put("/:id",verifyAdmin,updateRoom);

//DELETE
roomsRouter.delete("/:id/:hotelId",verifyAdmin,deleteRoom);

//GET
roomsRouter.get("/:id",getRoom);

//GET ALL
roomsRouter.get("/",getRooms);

export default roomsRouter;