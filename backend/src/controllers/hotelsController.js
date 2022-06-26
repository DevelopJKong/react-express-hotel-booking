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
  const { min, max, ...others } = req.query;
  console.log(others);
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999 }, //여기서 왜 | 이렇게 비트 연산자를 사용해야하는거지?
    }).limit(req.query.limit);
    console.log(hotels);
    res.status(200).json(hotels);
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
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villas" });
    const cabinsCount = await Hotel.countDocuments({ type: "cabins" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinsCount },
    ]);
  } catch (error) {
    next(error);
  }
};
