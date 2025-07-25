import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import sessionController from '../controllers/sessionController.js';
import auth from '../Middleware/auth.js';
import sessionRoutes from '../routes/sessionRoutes.js';


router.post('/', auth, sessionController.createSession);
router.get('/', auth, sessionController.getSessions);
router.post('/:id/sign', auth, sessionController.signSession);

export default router;
