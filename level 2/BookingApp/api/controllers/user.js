import user from "../models/hotel.js";

export const updateUser = async (req, res, next) => {
    try{
        const updateduser = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true} )
        res.status(200).json(updateduser);
    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try{
        await user.findByIdAndDelete(req.params.id );
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        next(err);
    }
}

export const getUser = async (req, res, next) => {
    try{
        const user = await Hotel.findById(req.params.id );
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

export const getUsers = async (req, res, next) => {
    try{
        const users = await user.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}