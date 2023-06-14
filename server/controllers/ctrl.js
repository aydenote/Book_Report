const path = require('path');
const User = require('../model/User');

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
    const { title, content } = req.body;
    const imageFile = req.file;
    console.log(title, content);
    console.log(imageFile);
  },
};

module.exports = { output, process };
