import User from "../models/User.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const { username, password, email } = req.body;

  try {
    const newUser = new User({
      username,
      password,
      email,
    });

    await newUser.save();
    res.status(201).send("User has been created");
  } catch (error) {
    next(error);
  }
};

export const join = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const validaionCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validaionCheck)
      return next(createError(404, "Wrong password or username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    

    const { password, isAdmin, ...otherDetails } = user._doc;
      console.log(user._doc);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails});
      
  } catch (error) {
    next(error);
  }
};
