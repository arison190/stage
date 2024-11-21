const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connecté à la base de données MongoDB');
    } catch (error) {
        console.error('Erreur de connexion à la base de données:', error.message);
        process.exit(1); // Quitter le processus avec un code d'erreur
    }
};

module.exports = connectDB;
