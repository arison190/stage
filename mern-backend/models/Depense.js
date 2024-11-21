const mongoose = require('mongoose');

const depenseSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    besoin: { type: String, required: true },
    nombreDeBesoin: { type: Number, required: true },
    prixA1: { type: Number, required: true },
    prixBesoin: { type: Number, required: true },
    serviceBesoin: { type: String, required: true },
    actions: { type: String, required: true },
    dateEtHeure: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Depense', depenseSchema);