const mongoose = require('mongoose');

const ajoutRevenueSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    nombre: { type: Number, required: true },
    prixBeson: { type: Number, required: true },
    portService: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('AjoutRevenue', ajoutRevenueSchema);