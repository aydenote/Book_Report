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

  static async save(userId, postId, bookTitle, postTitle, content, date, imagePath) {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO posts(userId, postId, bookTitle, postTitle, content, date, imagePath) VALUES(?, ?, ?, ?, ?, ?, ?);';
      db.query(query, [userId, postId, bookTitle, postTitle, content, date, imagePath], (err, _) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static delete(postId) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM posts WHERE postId = ?;';
      db.query(query, [postId], (err, data) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = PostStorage;
