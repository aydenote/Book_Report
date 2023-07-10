const db = require('../config/db');

class PostStorage {
  static getAllPostsInfo(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM posts WHERE userId = ?;';
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data);
      });
    });
  }

  static getSinglePostsInfo(postId) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM posts WHERE postId = ?;';
      db.query(query, [postId], (err, data) => {
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

  static edit(postId, content, imagePath, postTitle, bookTitle) {
    let query = '';
    let columnValues = [];

    if (imagePath) {
      query = 'UPDATE posts SET content=?, imagePath=?, postTitle=?, bookTitle=? WHERE postId=?';
      columnValues = [content, imagePath, postTitle, bookTitle, postId];
    } else {
      query = 'UPDATE posts SET content=?, postTitle=?, bookTitle=? WHERE postId=?';
      columnValues = [content, postTitle, bookTitle, postId];
    }

    return new Promise((resolve, reject) => {
      db.query(query, columnValues, (err, data) => {
        if (err) reject(err);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = PostStorage;
