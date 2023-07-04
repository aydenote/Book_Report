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
      expiresIn: '1h',
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
      expiresIn: '14 days',
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

/** Refresh Token 검증 함수 */
const verifyRefreshToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const clientRefreshToken = authHeader && authHeader.split('Bearer ')[1];
  const userId = req.body.params.userId;
  const dbUserInfo = await UserStorage.getUserInfo(userId);

  if (!clientRefreshToken || !dbUserInfo.refreshToken) {
    res.status(401).send({ type: 'lost', msg: 'Refresh 인증 토큰이 없습니다.' });
  }

  if (dbUserInfo.refreshToken === clientRefreshToken) {
    jwt.verify(clientRefreshToken, process.env.REFRESH_TOKEN_KEY, err => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          res.status(401).send({ type: 'expired', msg: '인증 토큰 만료되었습니다. 다시 로그인해 주세요.' });
        } else if (err.name === 'JsonWebTokenError') {
          res.status(401).send({ type: 'damaged', msg: 'Refresh 인증 토큰이 손상되었습니다.' });
        } else {
          res.status(401).send({ type: 'damaged', msg: '유효하지 않은 Refresh 인증 토큰입니다.' });
        }
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({ type: 'match', msg: 'Refresh 인증 토큰 정보가 일치하지 않습니다.' });
  }
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
