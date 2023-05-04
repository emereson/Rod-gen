const catchAsync = require('../utils/catchAsync');
const modelName = require('../models/modelFile');

exports.findAll = catchAsync(async (req, res, next) => {
  return res.json(/* valor a retornar */);
});
