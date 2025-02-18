const Router = require('express');
const echoController = require('../controllers/echo.controller');

const router = new Router();

router.get(['/', ''], echoController.echo);
router.post(['/', ''], echoController.echo);

module.exports = router;
