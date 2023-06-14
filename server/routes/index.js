'use strict';

const express = require('express');
const controller = require('../controllers/ctrl');
const upload = require('../config/multer');
const router = express.Router();

router.get('*', controller.output);

// 사용자 정보
router.post('/login', controller.process.login);
router.post('/register', controller.process.register);

// 게시물 정보
router.post('/report/write', upload.single('image'), controller.process.create);

module.exports = router;
