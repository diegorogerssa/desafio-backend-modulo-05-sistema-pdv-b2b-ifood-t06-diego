const jwt = require('jsonwebtoken');
const comparePasswords = require('../../utils/getEncryptedPass');
const { getUserByEmailModel } = require('../../models');

const loginService = async (email, senha) => {
  const [user] = await getUserByEmailModel(email);

  if (!user) {
    throw { statusCode: 404, message: 'User not found.' };
  }
  console.log(user.senha);
  const isPasswordValid = await comparePasswords(senha, user.senha);

  if (!isPasswordValid) {
    throw { statusCode: 404, message: 'User not found.' };
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '8h',
  });
  return token;
};

module.exports = loginService;
