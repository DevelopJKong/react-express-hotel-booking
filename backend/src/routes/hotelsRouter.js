import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotelsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

//UPDATE
hotelsRouter.put("/:id([0-9a-f]{24})", verifyAdmin, updateHotel);

//DELETE
hotelsRouter.delete("/:id([0-9a-f]{24})", verifyAdmin, deleteHotel);

//GET
hotelsRouter.get("/:id([0-9a-f]{24})", getHotel);

//GET ALL
hotelsRouter.get("/", getAllHotel);
hotelsRouter.get("/countByCity",countByCity);
hotelsRouter.get("/countByType",countByType);






export default hotelsRouter;
