'use strict';

// 모듈
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// 라우팅
const apiRoutes = require('./routes/index');

// 앱 설정
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/', apiRoutes);

module.exports = app;
