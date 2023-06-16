const jwt = require('jsonwebtoken');

// JWT 토큰 설정
const token = jwt.sign(
  {
    type: 'JWT',
  },
  process.env.TOKEN_SECRET_KEY, // secret key
  {
    expiresIn: '60m',
    issuer: 'ayden',
  }
);

module.exports = {
  jwt,
  token,
};
