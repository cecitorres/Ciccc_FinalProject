const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    guests: {
        type: Object,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    // TODO: Should be an user ID
    user: {
        type: String
        // type: mongoose.SchemaTypes.ObjectId
    },
    rooms: {
        type: Number
    },
    roomType: {
        type: String,
    },
}, {
    timestamps: true
})

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;