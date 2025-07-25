import express from 'express';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken"; // corrigé "jwst"
import dotenv from 'dotenv';
import userRoutes from '../routes/userRoutes.js';
import sessionRoutes from '../routes/sessionRoutes.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);

app.listen(port, () => {
  console.log(`Serveur à l'écoute sur http://localhost:${port}`);
});
