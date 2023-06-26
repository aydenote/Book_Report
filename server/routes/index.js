'use strict';

const express = require('express');
const controller = require('../controllers/ctrl');
const upload = require('../config/multer');
const { authenticateToken } = require('../config/token');
const router = express.Router();

// 사용자 정보
router.post('/login', controller.process.login);
router.post('/register', controller.process.register);

// 게시물 정보
router.get('/report/read', authenticateToken, controller.process.read);
router.post('/report/write', authenticateToken, upload.single('image'), controller.process.create);
router.delete('/report/delete', authenticateToken, controller.process.delete);

module.exports = router;
