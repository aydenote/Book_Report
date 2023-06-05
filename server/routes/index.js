'use strict';

const express = require('express');
const controller = require('../controllers/ctrl');
const router = express.Router();

router.get('*', controller.output);

router.post('/login', controller.process.login);
router.post('/register', controller.process.register);

module.exports = router;
