import Hotel from "../models/Hotel.js";

//Create
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    return res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

//Update
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedHotel);
    return res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

//Delete
export const deleteHotel = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Hotel.findByIdAndDelete(id);

    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    next(error);
  }
};

//Get
export const getHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

//Get All
export const getAllHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.find();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

//CountByCity
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

//CountByType
export const countByType = async (req, res, next) => {
  const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
};
