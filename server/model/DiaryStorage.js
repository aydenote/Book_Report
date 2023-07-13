const db = require('../config/db');

class DiaryStorage {
  static async save(userId, diaryId, diaryTitle, content, date) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO diary(userId, diaryId, diaryTitle, content, date) VALUES(?, ?, ?, ?, ?);';
      db.query(query, [userId, diaryId, diaryTitle, content, date], (err, _) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = DiaryStorage;
