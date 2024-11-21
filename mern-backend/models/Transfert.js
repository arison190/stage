// models/Transfert.js
const mongoose = require('mongoose');

const transfertSchema = new mongoose.Schema({
    montant: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    expediteur: {
        type: String,
        required: true,
    },
    destinataire: {
        type: String,
        required: true,
    },
    categorie: {
        type: String,
        enum: ['manuel', 'intermediaire'],
        required: true,
    },
});

const Transfert = mongoose.model('Transfert', transfertSchema);
module.exports = Transfert;

