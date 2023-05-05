const catchAsync = require('../utils/catchAsync');
const Event = require('../models/event.model');
const { ref, uploadBytes } = require('firebase/storage');
const { storage } = require('../utils/firebase');

exports.findAll = catchAsync(async (req, res, next) => {
  const event = await Event.findAll({
    where: {
      status: 'active',
    },
  });

  return res.status(200).json({
    status: 'success',
    results: event.length,
    event,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const {
    name,
    typeEvent,
    description,
    rules,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
  } = req.body;

  const imgRef = ref(storage, `event/${Date.now()}-${req.file.originalname}`);

  const imgUploaded = await uploadBytes(imgRef, req.file.buffer);

  const event = await Event.create({
    name,
    typeEvent,
    description,
    rules,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
    coverImg: imgUploaded.metadata.fullPath,
  });

  return res.status(201).json({
    status: 'Success',
    message: 'event created successfully',
    event,
  });
});

exports.findOne = catchAsync(async (req, res, next) => {
  const { event } = req;

  return res.status(200).json({
    status: 'success',
    event,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { event } = req;
  const {
    name,
    description,
    rules,
    imagen_de_portada,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
  } = req.body;

  await event.update({
    name,
    description,
    rules,
    coverImg: imagen_de_portada,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
  });

  return res.status(200).json({
    status: 'success',
    message: 'the event has been updated',
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { event } = req;

  await event.update({ status: 'disabled' });

  return res.status(200).json({
    status: 'success',
    message: 'the event has been delete',
    event,
  });
});
