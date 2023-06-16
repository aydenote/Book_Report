const PostStorage = require('./PostStorage');

class Post {
  constructor(body, imagePath) {
    this.body = body;
    this.imagePath = imagePath;
  }

  async add() {
    const client = this.body;
    const imagePath = this.imagePath;
    try {
      const response = await PostStorage.save(client.userId, client.postId, client.title, client.content, imagePath);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Post;
