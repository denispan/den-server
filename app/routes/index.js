const Router = require('express');
const echoRouter = require('./echo.routes');
const kBookingRouter = require('./kBooking.routes');

const router = new Router();

router.use('/echo', echoRouter);
router.use('/kbooking', kBookingRouter);

module.exports = router;
