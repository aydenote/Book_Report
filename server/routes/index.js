'use strict';

const express = require('express');
const controller = require('../controllers/ctrl');
const upload = require('../config/multer');
const { verifyAccessToken, verifyRefreshToken } = require('../config/token');
const router = express.Router();

// 사용자 정보
router.post('/login', controller.process.login);
router.post('/register', controller.process.register);
router.post('/refresh', verifyRefreshToken, controller.process.createToken);

// 게시물 정보
router.get('/report/readAllPost', verifyAccessToken, controller.process.readAllPost);
router.get('/report/readSinglePost', verifyAccessToken, controller.process.readSinglePost);
router.post('/report/write', verifyAccessToken, upload.single('image'), controller.process.createPost);
router.delete('/report/delete', verifyAccessToken, controller.process.delete);
router.get('/image/uploads/:imagePath', controller.process.image);
router.patch('/report/edit', verifyAccessToken, upload.single('image'), controller.process.edit);

// 일기 정보
router.post('/diary/write', upload.single('diary'), controller.process.createDiary);
module.exports = router;
