const bcrypt = require('bcrypt');
const { getUserByEmailModel, registerModel } = require('../../models');

const registerService = async (userData) => {
  const { nome, email, senha } = userData;

  const [emailExists] = await getUserByEmailModel(email);
  if (emailExists) {
    throw {
      statusCode: 409,
      message: 'A user with the provided email address is already registered',
    };
  }

  const encryptedPassword = await bcrypt.hash(senha, 10);

  const [registeredData] = await registerModel({
    nome,
    email,
    encryptedPassword,
  });
  return registeredData;
};

module.exports = registerService;
