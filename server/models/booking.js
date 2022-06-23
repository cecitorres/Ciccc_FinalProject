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
    roomType: {
        type: String,
        required: true
    },
    contact: {
        // TODO: Should be an user ID
        userID: {
            type: String
            // type: mongoose.SchemaTypes.ObjectId
        },
        fullName: {
            type: String,
        },
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
        adults: {
            type: Number,
            required: true
        },
        children: {
            type: Number,
            default: 0
        }
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