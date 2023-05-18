const catchAsync = require('../utils/catchAsync');
const Event = require('../models/event.model');
const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { storage } = require('../utils/firebase');

exports.findAll = catchAsync(async (req, res, next) => {
  const events = await Event.findAll({
    where: {
      status: 'active',
    },
  });

  const eventsPromises = events.map(async (event) => {
    const imgRef = ref(storage, event.coverImg);
    const url = await getDownloadURL(imgRef);

    event.coverImg = url;
    return events;
  });

  const eventResolved = await Promise.all(eventsPromises);

  return res.status(200).json({
    status: 'success',
    results: events.length,
    events: eventResolved,
  });
});

exports.findAllLiga = catchAsync(async (req, res, next) => {
  const events = await Event.findAll({
    where: {
      typeEvent: 'Liga',
    },
  });

  const eventsPromises = events.map(async (event) => {
    const imgRef = ref(storage, event.coverImg);
    const url = await getDownloadURL(imgRef);

    event.coverImg = url;
    return event;
  });

  const eventResolved = await Promise.all(eventsPromises);

  return res.status(200).json({
    status: 'success',
    results: events.length,
    events: eventResolved,
  });
});

exports.findAllAmericano = catchAsync(async (req, res, next) => {
  const events = await Event.findAll({
    where: {
      typeEvent: 'Americano',
    },
  });

  const eventsPromises = events.map(async (event) => {
    const imgRef = ref(storage, event.coverImg);
    const url = await getDownloadURL(imgRef);

    event.coverImg = url;
    return event;
  });

  const eventResolved = await Promise.all(eventsPromises);

  return res.status(200).json({
    status: 'success',
    results: events.length,
    events: eventResolved,
  });
});

exports.findAllTorneo = catchAsync(async (req, res, next) => {
  const events = await Event.findAll({
    where: {
      typeEvent: 'Torneo',
    },
  });

  const eventsPromises = events.map(async (event) => {
    const imgRef = ref(storage, event.coverImg);
    const url = await getDownloadURL(imgRef);

    event.coverImg = url;
    return event;
  });

  const eventResolved = await Promise.all(eventsPromises);

  return res.status(200).json({
    status: 'success',
    results: events.length,
    events: eventResolved,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const {
    name,
    subTitle,
    category,
    place,
    typeEvent,
    description,
    rules,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
    price,
    generalConditions,
    requirements,
    changesCancellations,
  } = req.body;

  const imgRef = ref(storage, `event/${Date.now()}-${req.file.originalname}`);

  const imgUploaded = await uploadBytes(imgRef, req.file.buffer);

  const event = await Event.create({
    name,
    subTitle,
    category,
    place,
    typeEvent,
    description,
    rules,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
    price,
    generalConditions,
    requirements,
    changesCancellations,
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

  const imgRef = ref(storage, event.coverImg);
  const url = await getDownloadURL(imgRef);

  event.coverImg = url;

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
    generalConditions,
    requirements,
    changesCancellations,
    imagen_de_portada,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
    price,
    status,
  } = req.body;

  await event.update({
    name,
    description,
    rules,
    generalConditions,
    requirements,
    changesCancellations,
    coverImg: imagen_de_portada,
    startDateEvent,
    endDateEvent,
    startDateInscription,
    endDateInscription,
    price,
    status,
  });

  return res.status(200).json({
    status: 'success',
    message: 'the event has been updated',
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { event } = req;

  await event.destroy();

  return res.status(200).json({
    status: 'success',
    message: 'the event has been delete',
    event,
  });
});
