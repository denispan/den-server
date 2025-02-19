const Router = require('express');
const kBookingController = require('../controllers/kBooking.controller');

const router = new Router();

router.get('/data', kBookingController.getMockData);
router.post('/', kBookingController.assertData);

module.exports = router;
