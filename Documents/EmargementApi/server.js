const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connecté à MongoDB');
}).catch(err => {
    console.error('Erreur de connexion à MongoDB', err);
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/sessions', require('./routes/sessionRoutes'));

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur http://localhost:${port}`);
});
