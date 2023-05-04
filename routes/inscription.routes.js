const express = require('express');

const inscriptionController = require('../controllers/inscription.controller');
const inscriptionMiddleware = require('../middlewares/inscription.middleware');

const router = express.Router();

router.get('/', inscriptionController.findAll);
router.post('/', inscriptionController.create);
router.patch(
  '/:id',
  inscriptionMiddleware.validExistEvent,
  inscriptionController.update
);
router.delete(
  '/:id',
  inscriptionMiddleware.validExistEvent,
  inscriptionController.delete
);

module.exports = router;
