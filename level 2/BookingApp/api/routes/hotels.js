import express from "express";
import{
    createHotel,deleteHotel,updateHotel,getHotel,getHotels, countByCity,
}from "../controllers/hotel.js";

import Hotel from "../models/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
// import {createError}from "../utils/error.js";

const router = express.Router();

//create a new hotel
router.post("/",verifyAdmin, createHotel);

//update a hotel
router.put("/:id",verifyAdmin, updateHotel); 
//delete a hotel
router.delete("/:id",verifyAdmin, deleteHotel); 
//get a hotel
router.get("/find/:id", getHotel);
//get all
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);
export default router;