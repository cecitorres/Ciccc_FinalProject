const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    guests: {
        type: Number,
        required: true
    },
    dates: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId
    },
    hotel: {
      type: mongoose.SchemaTypes.ObjectId
    },
    room: {
      type: mongoose.SchemaTypes.ObjectId
    },
}, {
    timestamps: true
})

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
