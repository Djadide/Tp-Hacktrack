import express from 'express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken"; 
import dotenv from 'dotenv';
import userRoutes from '../routes/userRoutes.js';
import sessionRoutes from '../routes/sessionRoutes.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Sert le dossier public (où doit se trouver ton index.html)
app.use(express.static('public'));
// Routes

app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);

// (Optionnel) Route d'accueil pour le navigateur
//app.get('/', (req, res) => {
  //res.send('Bienvenue sur l’API Emargement (Express + MongoDB) 🚀');
//});

app.listen(port, () => {
  console.log(`Serveur à l'écoute sur http://localhost:${port}`);
});
