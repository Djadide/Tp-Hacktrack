import express from "express";
import mongoose from "mongoose";
import jwst from "jsonwebtoken";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const register = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const newUser = new User({ email, password, role });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Utilisateur non trouvé' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
};
export default { register, login };
