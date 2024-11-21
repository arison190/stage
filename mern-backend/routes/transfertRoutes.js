// routes/transfertRoutes.js
const express = require('express');
const router = express.Router();
const transfertController = require('../controllers/transfertController');

// Routes pour les transferts
router.post('/', transfertController.createTransfert);
router.get('/', transfertController.getAllTransferts);
router.get('/:id', transfertController.getTransfertById);
router.put('/:id', transfertController.updateTransfert);
router.delete('/:id', transfertController.deleteTransfert);

module.exports = router;