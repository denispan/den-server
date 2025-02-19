const Router = require('express');
const bigTripController = require('../controllers/bigTrip.controller');

const router = new Router();

router.get('/points', bigTripController.getAllPoints);
router.get('/offers', bigTripController.getAllOffers);
router.get('/destinations', bigTripController.getAllDestinations);
router.post('/points/', bigTripController.createPoint);
router.put('/points/:point_id', bigTripController.updatePoint);
router.delete('/points/:point_id', bigTripController.deletePoint);

module.exports = router;
