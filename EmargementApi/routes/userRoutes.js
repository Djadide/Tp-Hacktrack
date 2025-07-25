import express from 'express';
import mongoose from 'mongoose';
import sessionRoutes from '../routes/sessionRoutes.js';
const router = express.Router();
import userController from '../controllers/userController.js';
import auth from '../Middleware/auth.js';


router.post('/register', userController.register);
router.post('/login', userController.login);

export default router;