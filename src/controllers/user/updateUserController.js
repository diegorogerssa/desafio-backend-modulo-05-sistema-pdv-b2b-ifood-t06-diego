const { updateUserService } = require('../../services');

const updateUserController = async (req, res) => {
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
    return res.status(400).json({ message: error.message });
  }
};

module.exports = updateUserController;
