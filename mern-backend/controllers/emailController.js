const Email = require('../models/Email');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Assurez-vous de charger les variables d'environnement

// Configuration du transporteur email avec vos informations
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Utilisez la variable d'environnement
        pass: process.env.EMAIL_PASS  // Utilisez la variable d'environnement
    }
});

// Fonction pour valider les adresses email
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const emailController = {
    // Envoyer un email
    sendEmail: async (req, res) => {
        const { to, subject, content } = req.body;

        // Validation simple
        if (!to || !subject || !content || !validateEmail(to)) {
            return res.status(400).json({ success: false, message: 'Tous les champs sont requis et l\'adresse e-mail doit être valide.' });
        }

        try {
            const mailOptions = {
                from: process.env.EMAIL_USER, // Utilisez la variable d'environnement
                to,
                subject,
                text: content
            };

            await transporter.sendMail(mailOptions);

            const newEmail = new Email({ from: process.env.EMAIL_USER, to, subject, content });
            await newEmail.save();

            res.status(200).json({ success: true, message: 'Email envoyé avec succès', email: newEmail });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
        }
    },

    // Récupérer tous les emails
    getAllEmails: async (req, res) => {
        try {
            const emails = await Email.find().sort({ createdAt: -1 });
            res.status(200).json({ success: true, count: emails.length, emails });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la récupération des emails', error: error.message });
        }
    },

    // Supprimer un email
    deleteEmail: async (req, res) => {
        try {
            const email = await Email.findByIdAndDelete(req.params.id);

            if (!email) {
                return res.status(404).json({ success: false, message: 'Email non trouvé' });
            }

            res.status(200).json({ success: true, message: 'Email supprimé avec succès' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Erreur lors de la suppression de l\'email', error: error.message });
        }
    }
};

module.exports = emailController;