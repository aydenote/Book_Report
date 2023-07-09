const PostStorage = require('./PostStorage');

class Post {
  constructor(body, imagePath) {
    this.body = body;
    this.imagePath = imagePath;
  }

  async addPost() {
    const client = this.body;
    const imagePath = this.imagePath;
    try {
      const response = await PostStorage.save(
        client.userId,
        client.postId,
        client.bookTitle,
        client.postTitle,
        client.content,
        client.date,
        imagePath
      );
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async getAllPost(userId) {
    try {
      const response = await PostStorage.getAllPostsInfo(userId);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async getSinglePost(postId) {
    try {
      const response = await PostStorage.getSinglePostsInfo(postId);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async delPost(userId, postId) {
    try {
      const response = await PostStorage.delete(postId);
      if (response.success) {
        const postsData = this.getAllPost(userId);
        return postsData;
      }
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Post;
