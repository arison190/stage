// controllers/transfertController.js
const Transfert = require('../models/Transfert');

// Créer un transfert
exports.createTransfert = async (req, res) => {
    try {
        const transfert = new Transfert(req.body);
        await transfert.save();
        res.status(201).json(transfert);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtenir tous les transferts
exports.getAllTransferts = async (req, res) => {
    try {
        const transferts = await Transfert.find();
        res.status(200).json(transferts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir un transfert par ID
exports.getTransfertById = async (req, res) => {
    try {
        const transfert = await Transfert.findById(req.params.id);
        if (!transfert) return res.status(404).json({ message: 'Transfert non trouvé' });
        res.status(200).json(transfert);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un transfert
exports.updateTransfert = async (req, res) => {
    try {
        const transfert = await Transfert.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transfert) return res.status(404).json({ message: 'Transfert non trouvé' });
        res.status(200).json(transfert);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un transfert
exports.deleteTransfert = async (req, res) => {
    try {
        const transfert = await Transfert.findByIdAndDelete(req.params.id);
        if (!transfert) return res.status(404).json({ message: 'Transfert non trouvé' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};