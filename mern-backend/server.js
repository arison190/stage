const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/user');
const depenseRoutes = require('./routes/depenseRoutes');
const transfertRoutes = require('./routes/transfertRoutes');
const emailRoutes = require('./routes/emailRoutes'); // Assurez-vous d'importer les routes d'email
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Middleware pour parser le JSON

// Configuration de CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Frontend React sur localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
};

// Appliquer le middleware CORS
app.use(cors(corsOptions));

// Routes
app.use('/api', userRoutes);
app.use('/api/depenses', depenseRoutes);
app.use('/api/emails', emailRoutes); // Assurez-vous que emailRoutes est défini
app.use('/api/transferts', transfertRoutes);


// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Quelque chose a mal tourné !' });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
