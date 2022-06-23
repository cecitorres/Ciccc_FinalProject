const {
    calculateTotalNights
} = require("../utils/index");
const {
    ROOM_PRICES_PEER_NIGHT,
    TAX_VALUE
} = require("../constants/index")
const Booking = require('../models/booking');

const getBookings = async (req, res) => {
    try {
        const data = await Booking.find();

        return res.status(200).json({
            message: "Successfully fetched list of bookings",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createBooking = async (req, res) => {
    try {
        const body = req.body;

        const totalNights = calculateTotalNights(new Date(body.endDate), new Date(body.startDate));
        const preTaxPrice = body.rooms * totalNights * ROOM_PRICES_PEER_NIGHT[body.roomType];
        const tax = preTaxPrice * TAX_VALUE;
        const totalPrice = preTaxPrice + tax;

        // Validate if there's room available for that dates
        const isBookingAvailable = true;

        if (!isBookingAvailable) {
            return res.status(412).json({
                message: "Room not available",
                error
            })
        }

        const booking = new Booking({
            ...body,
            totalNights,
            preTaxPrice,
            tax,
            totalPrice
        });

        const data = await booking.save();

        return res.status(200).json({
            message: "Successfully booking created",
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const confirmBooking = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        // Validate if there's room available for that dates
        const isBookingAvailable = true;

        if (!isBookingAvailable) {
            return res.status(412).json({
                message: "Room not available"
            })
        }

        const data = await Booking.findOneAndUpdate({
            _id: id
        }, {
            ...body,
            status: 'approved'
        }, {
            new: true,
            runValidators: true
        });

        return res.status(200).json({
            message: "Successfully approved booking",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

module.exports = {
    getBookings,
    createBooking,
    confirmBooking
};