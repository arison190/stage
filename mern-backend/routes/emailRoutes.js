const express = require('express');
const { sendEmail, getAllEmails, deleteEmail } = require('../controllers/emailController'); // Importez le contrôleur
const router = express.Router();

// Route pour envoyer un e-mail
router.post('/send', sendEmail);

// Route pour récupérer tous les e-mails
router.get('/', getAllEmails);

// Route pour supprimer un e-mail
router.delete('/:id', deleteEmail); // Assurez-vous que cette ligne est présente

module.exports = router;