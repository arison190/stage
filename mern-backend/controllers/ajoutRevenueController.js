const AjoutRevenue = require('../models/ajoutRevenueModel');

exports.createAjoutRevenue = async (req, res) => {
    try {
        const ajoutRevenue = new AjoutRevenue(req.body);
        await ajoutRevenue.save();
        res.status(201).json(ajoutRevenue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllAjoutRevenues = async (req, res) => {
    try {
        const ajoutRevenues = await AjoutRevenue.find();
        res.status(200).json(ajoutRevenues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAjoutRevenueById = async (req, res) => {
    try {
        const ajoutRevenue = await AjoutRevenue.findById(req.params.id);
        if (!ajoutRevenue) return res.status(404).json({ message: 'AjoutRevenue not found' });
        res.status(200).json(ajoutRevenue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAjoutRevenue = async (req, res) => {
    try {
        const ajoutRevenue = await AjoutRevenue.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ajoutRevenue) return res.status(404).json({ message: 'AjoutRevenue not found' });
        res.status(200).json(ajoutRevenue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAjoutRevenue = async (req, res) => {
    try {
        const ajoutRevenue = await AjoutRevenue.findByIdAndDelete(req.params.id);
        if (!ajoutRevenue) return res.status(404).json({ message: 'AjoutRevenue not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};