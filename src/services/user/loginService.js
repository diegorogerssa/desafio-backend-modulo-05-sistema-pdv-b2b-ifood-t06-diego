const jwt = require('jsonwebtoken');
const comparePasswords = require('../../utils/getEncryptedPass');
const { getUserByEmailModel } = require('../../models');

const loginService = async (email, senha) => {
  const [user] = await getUserByEmailModel(email);

  if (!user) {
    throw new Error('User not found.');
  }

  const isPasswordValid = await comparePasswords(senha, user.senha);

  if (!isPasswordValid) {
    throw new Error('Password invalid.');
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '8h' });
  return token;
};

module.exports = loginService;
