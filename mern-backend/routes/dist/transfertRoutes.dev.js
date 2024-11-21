"use strict";

// routes/transfertRoutes.js
var express = require('express');

var router = express.Router();

var transfertController = require('../controllers/transfertController'); // Routes pour les transferts


router.post('/', transfertController.createTransfert);
router.get('/', transfertController.getAllTransferts);
router.get('/:id', transfertController.getTransfertById);
router.put('/:id', transfertController.updateTransfert);
router["delete"]('/:id', transfertController.deleteTransfert);
module.exports = router;
//# sourceMappingURL=transfertRoutes.dev.js.map
