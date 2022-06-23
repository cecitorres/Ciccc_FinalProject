const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        require: true,
        enum: ['semi_double', 'queen_room', 'twin_room', 'king_room', 'family_room', 'premium_room']
    },
    description: {
        type: String,
        required: true
    },
    capacity: {
        adults: {
            type: Number,
            required: true
        },
        children: {
            type: Number,
            default: 0
        }
    },
    roomPrice: {
        type: Number,
        required: true
    },
    featuredImage: {
        type: String,
        require: false
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }],
    isAvailable: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;