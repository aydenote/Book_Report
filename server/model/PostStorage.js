const db = require('../config/db');

class PostStorage {
  static async save(userId, postId, title, content, imagePath) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO posts(userId, postId, title, content, imagePath) VALUES(?, ?, ?, ?, ?);';
      db.query(query, [userId, postId, title, content, imagePath], (err, _) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = PostStorage;
