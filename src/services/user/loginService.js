const jwt = require('jsonwebtoken');
const { getUserByEmailModel } = require('../../models');
const bcrypt = require('bcrypt');

const loginService = async (email, senha) => {
  const [user] = await getUserByEmailModel(email);

  if (!user) {
    throw new Error('User not found.');
  }

  const isPasswordValid = await bcrypt.compare(senha, user.senha);

  if (!isPasswordValid) {
    throw new Error('Password invalid.');
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '8h' });
  return token;
};

module.exports = loginService;
