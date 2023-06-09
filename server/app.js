'use strict';

// 모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

// 라우팅
const apiRoutes = require('./routes/index');

// 앱 설정
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/', apiRoutes);

module.exports = app;
