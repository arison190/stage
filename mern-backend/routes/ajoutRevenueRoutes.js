const express = require('express');
const router = express.Router();
const ajoutRevenueController = require('./controllers/ajoutRevenueController');

router.post('/ajout-revenues', ajoutRevenueController.createAjoutRevenue);
router.get('/ajout-revenues', ajoutRevenueController.getAllAjoutRevenues);
router.get('/ajout-revenues/:id', ajoutRevenueController.getAjoutRevenueById);
router.put('/ajout-revenues/:id', ajoutRevenueController.updateAjoutRevenue);
router.delete('/ajout-revenues/:id', ajoutRevenueController.deleteAjoutRevenue);

module.exports = router;