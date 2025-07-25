import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Définition du schéma utilisateur
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['formateur', 'etudiant'], default: 'etudiant' }
});

// Hash du mot de passe avant sauvegarde
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

// Création (ou récupération) du modèle User
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
