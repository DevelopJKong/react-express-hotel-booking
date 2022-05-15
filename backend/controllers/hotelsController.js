import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    return res.status(200).json(savedHotel);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(200).json(savedHotel);
  } catch (error) {
    return res.status(500).json(error);
  }
};
