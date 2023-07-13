const db = require('../config/db');

class DiaryStorage {
  static getAllDiaryInfo(userId) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM diary WHERE userId = ?;';
      db.query(query, [userId], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data);
      });
    });
  }

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
