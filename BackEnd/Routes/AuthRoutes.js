const express = require('express');
const { login, register } = require('../Controllers/AuthController');

const router = express.Router();

router.post('/login', login);      // Rota de login
router.post('/register', register); // Rota de cadastro

module.exports = router;
