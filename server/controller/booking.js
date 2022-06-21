const Booking = require('../models/booking');

const getBookings = async (req, res) => {
  try {
      const data = await Booking.find();

      return res.status(200).json({
          message: "Successfully fetched list of bookings",
          data
      })
  } catch(error) {
      return res.status(500).json({
          message: "There was an error!",
          error
      })
  }
}

const createBooking = async (req, res) => {
  try {

      const body = req.body;
      const booking = new Booking(body);

      const data = await booking.save();

      return res.status(200).json({
          message: "Successfully booking created",
          data
      })
  } catch(error) {
      return res.status(500).json({
          message: "There was an error!",
          error
      })
  }
}

module.exports = {
  getBookings,
  createBooking
};
