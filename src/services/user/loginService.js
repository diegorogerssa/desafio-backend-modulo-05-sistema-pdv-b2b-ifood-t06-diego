const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getUserByEmailModel } = require('../../models');

const loginService = async (email, senha) => {
  const [user] = await getUserByEmailModel(email);

  if (!user) {
    throw { statusCode: 401, message: 'Invalid username and/or password.' };
  }

  const isPasswordValid = await bcrypt.compare(senha, user.senha);

  if (!isPasswordValid) {
    throw { statusCode: 401, message: 'Invalid username and/or password.' };
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '8h',
  });
  return token;
};

module.exports = loginService;
