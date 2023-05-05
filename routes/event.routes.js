const express = require('express');

const { upload } = require('../utils/multer');

const eventController = require('../controllers/event.controller');
const eventMiddleware = require('../middlewares/event.middleware');

const router = express.Router();

router
  .route('/')
  .get(eventController.findAll)
  .post(upload.single('coverImg'), eventController.create);

router
  .route('/:id')
  .get(eventMiddleware.validExistEvent, eventController.findOne)
  .patch(eventMiddleware.validExistEvent, eventController.update)
  .delete(eventMiddleware.validExistEvent, eventController.delete);

module.exports = router;
