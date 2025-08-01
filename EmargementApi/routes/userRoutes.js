import express from 'express';
import userController from '../controllers/userController.js';
import auth from '../Middleware/auth.js';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/ping', (req, res) => res.send("pong!")); // route de test/debug

export default router;
