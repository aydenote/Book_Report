const path = require('path');

const output = (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
};

const process = {
  login: () => {
    console.log('로그인');
  },
  register: () => {
    console.log('회원가입');
  },
};

module.exports = { output, process };
