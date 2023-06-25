const db = require('../config/db');

class PostStorage {
  static getPostsInfo(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM posts WHERE userId = ?;';
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data);
      });
    });
  }

  static async save(userId, postId, title, content, date, imagePath) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO posts(userId, postId, title, content, date, imagePath) VALUES(?, ?, ?, ?, ?, ?);';
      db.query(query, [userId, postId, title, content, date, imagePath], (err, _) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = PostStorage;
