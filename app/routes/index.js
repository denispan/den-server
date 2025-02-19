const Router = require('express');
const echoRouter = require('./echo.routes');
const kBookingRouter = require('./kBooking.routes');
const bigTripRouter = require('./bigTrip.routes');

const router = new Router();

router.use('/echo', echoRouter);
router.use('/kbooking', kBookingRouter);
router.use('/big-trip', bigTripRouter);

module.exports = router;
