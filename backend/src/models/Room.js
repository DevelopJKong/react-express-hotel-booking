import mongoose from "mongoose";
import bcrypt from "bcrypt";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      unique: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      default: false,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: Date }] }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
