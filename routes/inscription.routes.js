const express = require('express');

const inscriptionController = require('../controllers/inscription.controller');
const inscriptionMiddleware = require('../middlewares/inscription.middleware');

const router = express.Router();

router.get('/', inscriptionController.findAll);
router.post('/', inscriptionController.create);
router.patch(
  '/:id',
  inscriptionMiddleware.validExistInscription,
  inscriptionController.update
);
router.delete(
  '/:id',
  inscriptionMiddleware.validExistInscription,
  inscriptionController.delete
);

module.exports = router;
