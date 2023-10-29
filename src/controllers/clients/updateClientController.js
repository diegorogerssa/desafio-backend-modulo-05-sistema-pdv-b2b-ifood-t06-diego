const { updateClientService } = require('../../services');

const updateClientController = async (req, res, next) => {
  const {
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado,
  } = req.body;

  const { id } = req.params;

  try {
    const updateClient = await updateClientService({
      nome, email, cpf, cep, rua, numero, bairro, cidade, estado,
    }, id);
    return res.status(204).json(updateClient);
  } catch (error) {
    return next(error);
  }
};

module.exports = updateClientController;
