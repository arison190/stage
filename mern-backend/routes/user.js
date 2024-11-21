// mern-backend/routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Routes pour les emails
router.post('/send', emailController.sendEmail);
router.get('/all', emailController.getAllEmails);
router.delete('/:id', emailController.deleteEmail);

module.exports = router;