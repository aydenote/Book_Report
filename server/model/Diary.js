const DiaryStorage = require('./DiaryStorage');

class Diary {
  constructor(body) {
    this.body = body;
  }

  async addDiary() {
    const client = this.body;
    try {
      const response = await DiaryStorage.save(
        client.userId,
        client.diaryId,
        client.diaryTitle,
        client.content,
        client.date
      );
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async getAllDiary(userId) {
    try {
      const response = await DiaryStorage.getAllDiaryInfo(userId);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Diary;
