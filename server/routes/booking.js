const express = require('express');
const router = express.Router();
const {
    getBookings,
    createBooking,
    confirmBooking,
    cancelBooking
} = require('../controller/booking');

router.get('/', getBookings);

router.post('/', createBooking);

router.put('/:id', confirmBooking)

router.delete('/:id', cancelBooking)

module.exports = router;