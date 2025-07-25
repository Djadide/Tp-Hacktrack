import Session from '../models/Session.js';
import User from '../models/User.js';

// Création d'une session
const createSession = async (req, res) => {
    const { title, date } = req.body;
    try {
        
        const newSession = new Session({ title, date });
        await newSession.save();
        res.status(201).json({ message: 'Session créée avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de la session' });
    }
};

const getSessions = async (req, res) => {
    try {
        const sessions = await Session.find().populate('attendees');
        res.status(200).json(sessions);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des sessions' });
    }
};
// Émargement (signature d'une session)
const signSession = async (req, res) => {
    const { id } = req.params;
    try {
        const session = await Session.findById(id);
        if (!session) return res.status(404).json({ message: 'Session non trouvée' });

        // On évite le double émargement
        const userId = req.user.id;
        if (session.attendees.includes(userId)) {
            return res.status(400).json({ message: 'Utilisateur déjà émargé à cette session.' });
        }

        session.attendees.push(userId);
        await session.save();
        res.status(200).json({ message: 'Émargement effectué avec succès' });
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de l'émargement" });
    }
};

export default { createSession, getSessions, signSession };