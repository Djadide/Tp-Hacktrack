import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const auth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Accès refusé' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token invalide' });
    }
};
export default auth;