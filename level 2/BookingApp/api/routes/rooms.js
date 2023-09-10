import express from "express";
import {createRoom,deleteRoom,getRoom,getRooms,updateRoom} from"../controllers/room.js";

import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//create a new hotel
router.post("/:hotelid",verifyAdmin, createRoom);

//update a hotel
router.put("/:id",verifyAdmin, updateRoom); 
//delete a hotel
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom); 
//get a hotel
router.get("/:id", getRoom);
//get all
router.get("/", getRooms);

export default router;