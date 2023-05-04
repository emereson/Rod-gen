const catchAsync = require('../utils/catchAsync');
const Liga = require('../models/liga.model');

exports.create = catchAsync(async (req, res, next) => {
  const { name, description, rules, imagen_de_portada } = req.body;
  const liga = await Liga.create({
    name,
    description,
    rules,
    coverImg: imagen_de_portada,
  });

  return res.status(201).json({
    status: 'Success',
    message: 'Ligue created successfully',
    liga,
  });
});
