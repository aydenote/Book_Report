'use strict';

const UserStorage = require('./UserStorage');
const { createAccessToken, createRefreshToken } = require('../config/token');

class User {
  constructor(body) {
    this.body = body;
  }

  async getInfo() {
    const client = this.body;
    const userInfo = await UserStorage.getUserInfo(client.id);

    return userInfo;
  }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);
      if (user) {
        if (user.id === client.id && user.password === client.password) {
          const newAccessToken = createAccessToken(user.id);
          const newRefreshToken = createRefreshToken(user.id);
          await UserStorage.setToken(user.id, newRefreshToken);

          return { success: true, newAccessToken, newRefreshToken };
        }
        return { success: false, msg: '비밀번호가 틀렸습니다.' };
      }
      return { success: false, msg: '존재하지 않는 아이디입니다.' };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async createToken() {
    const client = this.body;
    try {
      const newAccessToken = await createAccessToken(client.userId);
      return { success: true, newAccessToken };
    } catch (error) {
      return { success: false, err };
    }
  }
}

module.exports = User;
