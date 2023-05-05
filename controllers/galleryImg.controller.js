const catchAsync = require('../utils/catchAsync');
const GalleryImg = require('../models/galleryImg.model');
const { ref, uploadBytes } = require('firebase/storage');
const { storage } = require('../utils/firebase');

exports.findAll = catchAsync(async (req, res, next) => {
  const GalleryImg = await GalleryImg.findAll({
    where: {
      status: 'active',
    },
  });

  return res.status(200).json({
    status: 'success',
    results: galleryImg.length,
    galleryImg,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const postImgsPromises = req.files.map(async (file) => {
    const imgRef = ref(
      storage,
      `galleryImg/${Date.now()}-${file.originalname}`
    );

    const imgUploaded = await uploadBytes(imgRef, file.buffer);

    return await GalleryImg.create({
      name,
      eventId: id,
      img: imgUploaded.metadata.fullPath,
    });
  });

  await Promise.all(postImgsPromises);

  return res.status(201).json({
    status: 'Success',
    message: 'img created successfully',
  });
});

exports.findOne = catchAsync(async (req, res, next) => {
  const { galleryImg } = req;

  return res.status(200).json({
    status: 'success',
    galleryImg,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { galleryImg } = req;
  const { name, img } = req.body;

  await galleryImg.update({
    name,
    img,
  });

  return res.status(200).json({
    status: 'success',
    message: 'the img has been updated',
    galleryImg,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { galleryImg } = req;

  await galleryImg.update({ status: 'disabled' });

  return res.status(200).json({
    status: 'success',
    message: 'the img has been delete',
    galleryImg,
  });
});
