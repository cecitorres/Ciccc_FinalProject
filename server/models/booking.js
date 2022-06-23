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
        require: true,
        default: 'pending',
        enum: ['pending', 'cancel', 'approved', 'active', 'completed']
    },
    // TODO: Should be an user ID
    user: {
        type: String
        // type: mongoose.SchemaTypes.ObjectId
    },
    roomID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Room'
    },
    // guests: {
    //     type: Object,
    //     required: true
    // },
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