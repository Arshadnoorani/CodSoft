import express from "express";
import {updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import {verifyAdmin, verifyToken,verifyUser} from "../utils/verifyToken.js"; 
const router = express.Router();

// router.get("/checkuthentication", verifyToken, (req, res,next)=>{
//     res.send("Authenticated")
// }) 
// router.get("/checkuser/:id", verifyUser, (req, res,next)=>{
//     res.send("hello user you are logged in and you can delete or update your profile")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res,next)=>{
//     res.send("hello admin you are logged in and you can delete or update all profile")
// })
//update a hotel
router.put("/:id",verifyUser, updateUser); 
//delete a hotel
router.delete("/:id",verifyUser, deleteUser); 
//get a hotel
router.get("/:id",verifyUser ,getUser);
//get all
router.get("/",verifyAdmin, getUsers);
export default router;