'use strict';

const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      console.error(err);
      return { success: false, err };
    }
  }
}

module.exports = User;
