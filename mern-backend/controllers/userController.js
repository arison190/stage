// const User = require('../models/User');
const User = require('../models/User')
const bcrypt = require('bcryptjs'); // Pour le hachage des mots de passe
const jwt = require('jsonwebtoken'); // Pour les tokens JWT


// Inscription d'un utilisateur
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    // Vérifier si les champs requis sont présents
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe
        const newUser = new User({ name, email, password: hashedPassword });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Connexion d'un utilisateur
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser
};
