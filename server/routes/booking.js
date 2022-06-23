const express = require('express');
const router = express.Router();
const {
    getBookings,
    createBooking,
    confirmBooking
} = require('../controller/booking');

router.get('/', getBookings);

router.post('/', createBooking);

router.put('/:id', confirmBooking)

module.exports = router;