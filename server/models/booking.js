const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'cancel', 'approved', 'active', 'completed']
    },
    contact: {
        // TODO: Should be an user ID
        userID: String,
        // type: mongoose.SchemaTypes.ObjectId
        email: {
            type: String
        },
        phoneNumber: {
            type: String
        }
    },
    roomID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Room'
    },
    guests: {
        type: Object,
        required: true
    },
    // Maybe optionals in schema?
    totalNights: {
        type: Number
    },
    preTaxPrice: {
        type: Number
    },
    tax: {
        type: Number
    },
    totalPrice: {
        type: Number
    }
}, {
    timestamps: true
})

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;