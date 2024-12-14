const Session = require('../models/Session');

exports.createSession = async (req, res) => {
    const { title, date } = req.body;
    try {
        const newSession = new Session({ title, date });
        await newSession.save();
        res.status(201).json({ message: 'Session créée avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la création de la session' });
    }
};

exports.getSessions = async (req, res) => {
    try {
        const sessions = await Session.find().populate('attendees');
        res.status(200).json(sessions);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des sessions' });
    }
};

exports.signSession = async (req, res) => {
    const { id } = req.params;
    try {
        const session = await Session.findById(id);
        if (!session) return res.status(404).json({ message: 'Session non trouvée' });

        session.attendees.push(req.user.id);
        await session.save();
        res.status(200).json({ message: 'Émargement effectué avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'émargement' });
    }
};
