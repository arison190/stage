const Depense = require('../models/depense');

// Récupérer toutes les dépenses
exports.getDepenses = async (req, res) => {
    try {
        const depenses = await Depense.find();
        res.json(depenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter une nouvelle dépense
exports.createDepense = async (req, res) => {
    const depense = new Depense(req.body);
    try {
        const newDepense = await depense.save();
        res.status(201).json(newDepense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Modifier une dépense
exports.updateDepense = async (req, res) => {
    try {
        const depense = await Depense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!depense) return res.status(404).json({ message: 'Dépense non trouvée' });
        res.json(depense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer une dépense
exports.deleteDepense = async (req, res) => {
    try {
        const depense = await Depense.findByIdAndDelete(req.params.id);
        if (!depense) return res.status(404).json({ message: 'Dépense non trouvée' });
        res.json({ message: 'Dépense supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};