const {
    calculateTotalNights
} = require("../utils/index");
const {
    ROOM_PRICES_PEER_NIGHT,
    TAX_VALUE
} = require("../constants/index")
const Booking = require('../models/booking');
const Rooms = require('../models/room');

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
                message: "Room not available"
            })
        }

        const booking = new Booking({
            ...body,
            startDate: new Date(body.startDate),
            endDate: new Date(body.endDate),
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
    try {
        const id = req.params.id;
        const body = req.body;

        // Validate if there's room available for that dates
        const booking = await Booking.findById(id);
        const startDate = booking.startDate;
        const endDate = booking.endDate;
        const roomAvailable = await Rooms.findOne({
            $and: [{
                    type: booking.roomType
                },
                {
                    isAvailable: true
                },
                {
                    booking: {
                        $elemMatch: {
                            $or: [{
                                    startDate: {
                                        $gte: endDate
                                    }
                                },
                                {
                                    endDate: {
                                        $lte: startDate
                                    }
                                }
                            ]
                        }
                    }
                }, {
                    bookings: {
                        $not: {
                            $elemMatch: {
                                $or: [{
                                        startDate: {
                                            $gte: startDate,
                                            $lte: endDate
                                        }
                                    },
                                    {
                                        endDate: {
                                            $lte: endDate,
                                            $gte: startDate
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        })

        if (!roomAvailable) {
            return res.status(412).json({
                message: "Room not available"
            })
        }

        // console.log(roomAvailable, startDate, endDate, 123)
        // Reserve room
        const responseRoomBooked = await Rooms.findOneAndUpdate({
            _id: roomAvailable._id
        }, {
            bookings: [...roomAvailable.bookings, booking]
        }, {
            new: true,
            runValidators: true
        });

        // console.log(responseRoomBooked, 123)

        // Change status of booking to "approved"
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
        console.log(error)
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const cancelBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Booking.findOneAndUpdate({
            _id: id
        }, {
            status: 'cancel'
        }, {
            new: true,
            runValidators: true
        });

        return res.status(200).json({
            message: "Successfully cancel booking",
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
    confirmBooking,
    cancelBooking
};