const express = require('express');

const eventController = require('../controllers/event.controller');
const eventMiddleware = require('../middlewares/event.middleware');

const router = express.Router();

router.get('/', eventController.findAll);
router.post('/', eventController.create);
router.patch('/:id', eventMiddleware.validExistEvent, eventController.update);
router.delete('/:id', eventMiddleware.validExistEvent, eventController.delete);

module.exports = router;
