const express = require('express');
const router = express.Router();
const {
    getBookings,
    createBooking,
    confirmBooking,
    cancelBooking,
    // deleteBooking
} = require('../controller/booking');

router.get('/', getBookings);

router.post('/', createBooking);

router.put('/:id', confirmBooking)

router.delete('/:id', cancelBooking)

// router.delete('/:id', deleteBooking)

module.exports = router;