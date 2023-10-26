const { updateUserService } = require('../../services');

const updateUserController = async (req, res, next) => {
  const userData = {
    id: req.user.id,
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
  };
  try {
    await updateUserService(userData);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

module.exports = updateUserController;
