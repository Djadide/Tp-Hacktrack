import express from 'express';
import sessionController from '../controllers/sessionController.js';
import auth from '../Middleware/auth.js';

const router = express.Router();

router.post('/', auth, sessionController.createSession);
router.get('/', auth, sessionController.getSessions);
router.post('/:id/sign', auth, sessionController.signSession);

export default router;
