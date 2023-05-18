const express = require('express');

const { upload } = require('../utils/multer');

const eventController = require('../controllers/event.controller');
const eventMiddleware = require('../middlewares/event.middleware');

const router = express.Router();

router.get('/', eventController.findAll);
router.get('/liga', eventController.findAllLiga);
router.get('/americano', eventController.findAllAmericano);
router.get('/torneo', eventController.findAllTorneo);

router.post('/', upload.single('coverImg'), eventController.create);
router
  .route('/:id')
  .get(eventMiddleware.validExistEvent, eventController.findOne)
  .patch(eventMiddleware.validExistEvent, eventController.update)
  .delete(eventMiddleware.validExistEvent, eventController.delete);

module.exports = router;
