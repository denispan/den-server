const Router = require('express');
const echoController = require('../controllers/echo.controller')

const router = new Router();

router.get(['/echo/', '/echo'], echoController.echo);
router.post(['/echo/', '/echo'], echoController.echo);

module.exports = router;
