const path = require('path');
const User = require('../model/User');

const output = (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
};

const process = {
  login: () => {
    console.log('로그인');
  },
  register: async (req, res) => {
    const user = new User(req.body.data);
    const response = await user.register();
    const url = {
      method: 'POST',
      path: '/register',
      status: response.err ? 409 : 201,
    };

    return res.status(url.status).json(response);
  },
};

module.exports = { output, process };
