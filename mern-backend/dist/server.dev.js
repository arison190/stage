"use strict";

var express = require('express');

var connectDB = require('./config/db');

var cors = require('cors');

var userRoutes = require('./routes/user');

var depenseRoutes = require('./routes/depenseRoutes');

var transfertRoutes = require('./routes/transfertRoutes');

var emailRoutes = require('./routes/emailRoutes'); // Assurez-vous d'importer les routes d'email


var dotenv = require('dotenv'); // Charger les variables d'environnement


dotenv.config();
connectDB();
var app = express(); // Middleware

app.use(express.json()); // Middleware pour parser le JSON
// Configuration de CORS

var corsOptions = {
  origin: 'http://localhost:3000',
  // Frontend React sur localhost:3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // Méthodes autorisées
  allowedHeaders: ['Content-Type', 'Authorization'] // En-têtes autorisés

}; // Appliquer le middleware CORS

app.use(cors(corsOptions)); // Routes

app.use('/api', userRoutes);
app.use('/api/depenses', depenseRoutes);
app.use('/api/emails', emailRoutes); // Assurez-vous que emailRoutes est défini

app.use('/api/transferts', transfertRoutes); // Middleware de gestion des erreurs

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    message: 'Quelque chose a mal tourné !'
  });
}); // Démarrer le serveur

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Serveur d\xE9marr\xE9 sur le port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
