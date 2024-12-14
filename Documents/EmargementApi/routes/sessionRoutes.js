const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const auth = require('../middlewares/auth');

router.post('/', auth, sessionController.createSession);
router.get('/', auth, sessionController.getSessions);
router.post('/:id/sign', auth, sessionController.signSession);

module.exports = router;
