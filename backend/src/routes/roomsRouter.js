import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/roomsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomsRouter = express.Router();

//CREATE
roomsRouter.post("/:hotelId([0-9a-f]{24})",verifyAdmin,createRoom);

//UPDATE
roomsRouter.put("/:id([0-9a-f]{24})",verifyAdmin,updateRoom);

//DELETE
roomsRouter.delete("/:id([0-9a-f]{24})/:hotelId([0-9a-f]{24})",verifyAdmin,deleteRoom);

//GET
roomsRouter.get("/:id([0-9a-f]{24})",getRoom);

//GET ALL
roomsRouter.get("/",getRooms);

export default roomsRouter;