const express = require('express');

const inscriptionController = require('../controllers/inscription.controller');
const inscriptionMiddleware = require('../middlewares/inscription.middleware');

const router = express.Router();

router.get('/', inscriptionController.findAll);

router
  .route('/:id')
  .post(inscriptionController.create)
  .get(
    inscriptionMiddleware.validExistInscription,
    inscriptionController.findOne
  )
  .patch(
    inscriptionMiddleware.validExistInscription,
    inscriptionController.update
  )
  .delete(
    inscriptionMiddleware.validExistInscription,
    inscriptionController.delete
  );

module.exports = router;
