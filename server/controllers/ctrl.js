const path = require('path');
const User = require('../model/User');
const Post = require('../model/Post');

const output = (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body.data);
    const response = await user.login();

    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body.data);
    const response = await user.register();

    return res.json(response);
  },

  create: async (req, res) => {
    const imageFile = req.file.path;
    const post = new Post(req.body, imageFile);
    const response = await post.add();

    return res.json(response);
  },
};

module.exports = { output, process };
