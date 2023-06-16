const jwt = require('jsonwebtoken');

// JWT 토큰 설정
const token = jwt.sign(
  {
    type: 'JWT',
  },
  process.env.TOKEN_SECRET_KEY,
  {
    expiresIn: '60m',
    issuer: 'ayden',
  }
);

// 인증 미들웨어
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split('Bearer ')[1];
  jwt.verify(token, 'secret_blog', err => {
    if (err) {
      res.status(401).json({ error: '인증 문제로 게시물 생성에 실패하였습니다.' });
    } else {
      next();
    }
  });
};

module.exports = {
  jwt,
  token,
  authenticateToken,
};
