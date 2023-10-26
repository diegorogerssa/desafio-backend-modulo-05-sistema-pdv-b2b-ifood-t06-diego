const bcrypt = require('bcrypt');
const { updateUserModel, getUserByEmailModel } = require('../../models');

const updateUserService = async (userData) => {
  const {
    id,
    nome,
    email,
    senha,
  } = userData;

  const [user] = await getUserByEmailModel(email);
  if (user) {
    if (user.id !== id) {
      throw { statusCode: 409, message: 'The email provided is already being used by another user.' };
    }
  }

  const encryptedPassword = await bcrypt.hash(senha, 10);
  const userDataToUpdate = {
    id,
    nome,
    email,
    senha: encryptedPassword,
  };

  await updateUserModel(userDataToUpdate);
};

module.exports = updateUserService;
