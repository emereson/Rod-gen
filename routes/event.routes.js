const express = require('express');

const eventController = require('../controllers/event.controller');
const eventMiddleware = require('../middlewares/event.middleware');

const router = express.Router();

router.route('/');
router.get(eventController.findAll);
router.post(eventController.create);

router.route('/:id');
router.patch(eventMiddleware.validExistEvent, eventController.update);
router.delete(eventMiddleware.validExistEvent, eventController.delete);

module.exports = router;
