const Router = require('express');
const bookController = require('../controllers/book.controller');

const router = new Router();

router.get(['/booking/data', '/booking/data'], bookController.getAllOffers);
router.post(['/booking/', '/booking'], bookController.createOffer);

module.exports = router;
