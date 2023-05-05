const express = require('express');

const { upload } = require('../utils/multer');

const sponsorController = require('../controllers/sponsor.controller');
const sponsorMiddleware = require('../middlewares/sponsor.middleware');

const router = express.Router();

router
  .route('/')
  .get(sponsorController.findAll)
  .post(upload.single('sponsorImg'), sponsorController.create);

router
  .route('/:id')
  .get(sponsorMiddleware.validExistSponsor, sponsorController.findOne)
  .patch(sponsorMiddleware.validExistSponsor, sponsorController.update)
  .delete(sponsorMiddleware.validExistSponsor, sponsorController.delete);

module.exports = router;
