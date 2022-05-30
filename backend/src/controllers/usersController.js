import User from "../models/User.js";

export const createUser = async (req,res,next) => {
    const newUser = new User(req.body);

    try {
        
    } catch (error) {
        
    }
}

