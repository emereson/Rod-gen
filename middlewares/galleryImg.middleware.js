const catchAsync = require('../utils/catchAsync');
const GalleryImg = require('../models/galleryImg.model');

exports.validExistGalleryImg = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const galleryImg = await GalleryImg.findOne({
    where: {
      status: 'active',
      id,
    },
  });

  if (!galleryImg) {
    return next(new AppError(`galleryImg not found`, 404));
  }

  req.galleryImg = galleryImg;
  next();
});
