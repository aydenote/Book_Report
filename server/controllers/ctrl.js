const path = require('path');
const User = require('../model/User');
const Post = require('../model/Post');

const process = {
  login: async (req, res) => {
    const user = new User(req.body.params);
    const response = await user.login();

    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body.params);
    const response = await user.register();

    return res.json(response);
  },

  create: async (req, res) => {
    const imageFile = req.file.path;
    const post = new Post(req.body, imageFile);
    const response = await post.addPost();

    return res.json(response);
  },

  readAllPost: async (req, res) => {
    const userId = req.query.userId;
    const post = new Post();
    const response = await post.getAllPost(userId);

    return res.json(response);
  },

  readSinglePost: async (req, res) => {
    const postId = req.query.postId;
    const post = new Post();
    const response = await post.getSinglePost(postId);

    return res.json(response);
  },

  delete: async (req, res) => {
    const userId = req.query.userId;
    const postId = req.query.postId;
    const post = new Post();
    const response = await post.delPost(userId, postId);

    return res.json(response);
  },

  createToken: async (req, res) => {
    const user = new User(req.body.params);
    const response = await user.createToken();

    return res.json(response);
  },

  image: async (req, res) => {
    const imageName = req.params.imagePath;
    const imagePath = path.join(__dirname, '../uploads', imageName);

    res.sendFile(imagePath);
  },

  edit: async (req, res) => {
    if (req.file) {
      const imageFile = req.file.path;
      const post = new Post(req.body, imageFile);
      const response = await post.editPost();

      return res.json(response);
    } else {
      const post = new Post(req.body);
      const response = await post.editPost();

      return res.json(response);
    }
  },
};

module.exports = { process };
