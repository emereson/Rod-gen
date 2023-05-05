const express = require('express');

const { upload } = require('../utils/multer');

const galleryImgController = require('../controllers/galleryImg.controller');
const galleryImgMiddleware = require('../middlewares/galleryImg.middleware');

const router = express.Router();

router.route('/').get(galleryImgController.findAll);

router
  .route('/:id')
  .post(upload.array('img', 15), galleryImgController.create)
  .get(galleryImgMiddleware.validExistGalleryImg, galleryImgController.findOne)
  .patch(galleryImgMiddleware.validExistGalleryImg, galleryImgController.update)
  .delete(
    galleryImgMiddleware.validExistGalleryImg,
    galleryImgController.delete
  );

module.exports = router;
