const express =  require('express');
const router = express.Router();
const { getBookings, createBooking } = require('../controller/booking');

router.get('/', getBookings);

router.post('/', createBooking);

module.exports = router;
