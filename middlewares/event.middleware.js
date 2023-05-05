const Event = require('../models/event.model');
const GalleryImg = require('../models/galleryImg.model');
const Inscription = require('../models/inscription.model');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.validExistEvent = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const event = await Event.findOne({
    where: {
      status: 'active',
      id,
    },
    include: [
      {
        model: Inscription,
      },
      {
        model: GalleryImg,
      },
    ],
  });

  if (!event) {
    return next(new AppError(`event not found`, 404));
  }

  req.event = event;
  req.Inscription = event.Inscription;
  req.GalleryImg = event.GalleryImg;
  next();
});
