const express = require('express');
const router = express.Router();
const depenseController = require('../controllers/depenseController');

// Récupérer toutes les dépenses
router.get('/', depenseController.getDepenses);

// Ajouter une nouvelle dépense
router.post('/', depenseController.createDepense);

// Modifier une dépense
router.put('/:id', depenseController.updateDepense);

// Supprimer une dépense
router.delete('/:id', depenseController.deleteDepense);

module.exports = router;