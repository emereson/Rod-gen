const catchAsync = require('../utils/catchAsync');
const Inscription = require('../models/inscription.model');

exports.findAll = catchAsync(async (req, res, next) => {
  const inscription = await Inscription.findAll({
    where: {
      status: 'active',
    },
  });

  return res.status(200).json({
    status: 'success',
    results: inscription.length,
    inscription,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const {
    nameOne1,
    lastName1,
    RutPlayer1,
    email1,
    mobileNumber1,
    birthDate1,
    poloSize1,
    category1,
    clubPlay1,
    positionPlay1,
    medicalProblem1,
    nameOne2,
    lastName2,
    RutPlayer2,
    email2,
    mobileNumber2,
    birthDate2,
    poloSize2,
    category2,
    clubPlay2,
    positionPlay2,
    medicalProblem2,
  } = req.body;

  const inscription = await Inscription.create({
    nameOne1,
    lastName1,
    RutPlayer1,
    email1,
    mobileNumber1,
    birthDate1,
    poloSize1,
    category1,
    clubPlay1,
    positionPlay1,
    medicalProblem1,
    nameOne2,
    lastName2,
    RutPlayer2,
    email2,
    mobileNumber2,
    birthDate2,
    poloSize2,
    category2,
    clubPlay2,
    positionPlay2,
    medicalProblem2,
    eventId: id,
  });

  return res.status(201).json({
    status: 'Success',
    message: 'the inscription  has been created',
    inscription,
  });
});

exports.findOne = catchAsync(async (req, res, next) => {
  const { inscription } = req;

  return res.status(200).json({
    status: 'success',
    inscription,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { inscription } = req;
  const {
    nameOne1,
    lastName1,
    RutPlayer1,
    email1,
    mobileNumber1,
    birthdate1,
    poloSize1,
    category1,
    clubPlay1,
    positionPlay1,
    medicalProblem1,
    nameOne2,
    lastName2,
    RutPlayer2,
    email2,
    mobileNumber2,
    birthdate2,
    poloSize2,
    category2,
    clubPlay2,
    positionPlay2,
    medicalProblem2,
  } = req.body;

  await Inscription.update({
    nameOne1,
    lastName1,
    RutPlayer1,
    email1,
    mobileNumber1,
    birthdate1,
    poloSize1,
    category1,
    clubPlay1,
    positionPlay1,
    medicalProblem1,
    nameOne2,
    lastName2,
    RutPlayer2,
    email2,
    mobileNumber2,
    birthdate2,
    poloSize2,
    category2,
    clubPlay2,
    positionPlay2,
    medicalProblem2,
  });

  return res.status(200).json({
    status: 'success',
    message: 'the inscription has been updated',
    inscription,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { inscription } = req;

  await inscription.update({ status: 'disabled' });

  return res.status(200).json({
    status: 'success',
    message: 'the inscription has been delete',
    inscription,
  });
});
