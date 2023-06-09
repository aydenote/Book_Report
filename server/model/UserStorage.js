'use strict';

const db = require('../config/db');

class UserStorage {
  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users(id, name, password) VALUES(?, ?, ?);';
      db.query(query, [userInfo.id, userInfo.name, userInfo.password], (err, _) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
