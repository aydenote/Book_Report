const jwt = require('jsonwebtoken');
const UserStorage = require('../model/UserStorage');

/** JWT Access 토큰 설정 */
const createAccessToken = userId => {
  return jwt.sign(
    {
      userId,
      type: 'JWT',
    },
    process.env.ACCESS_TOKEN_KEY,
    {
      expiresIn: '1m',
      issuer: 'ayden',
    }
  );
};

/** JWT Refresh 토큰 설정 */
const createRefreshToken = userId => {
  return jwt.sign(
    {
      userId,
      type: 'JWT',
    },
    process.env.REFRESH_TOKEN_KEY,
    {
      expiresIn: '2m',
      issuer: 'ayden',
    }
  );
};

/** Access Token 검증 함수 */
const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader && authHeader.split('Bearer ')[1];

  if (!accessToken) {
    res.status(401).send({ type: 'lost', msg: 'Access 인증 토큰이 없습니다.' });
  }

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, err => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        res.status(401).send({ type: 'expired', msg: 'Access 인증 토큰이 만료되었습니다.' });
      } else if (err.name === 'JsonWebTokenError') {
        res.status(401).send({ type: 'damaged', msg: 'Access 인증 토큰이 손상되었습니다.' });
      } else {
        res.status(401).send({ type: 'damaged', msg: '유효하지 않은 Access 인증 토큰입니다.' });
      }
    } else {
      next();
    }
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
};
