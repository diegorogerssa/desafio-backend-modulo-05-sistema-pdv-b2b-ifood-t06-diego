const {
  getClientByIdModel, getClientByEmailModel, updateClientModel, getClientByCpfModel,
} = require('../../models');

const updateClientService = async (clientData, id) => {
  const {
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado,
  } = clientData;

  const client = await getClientByIdModel(id);

  if (!client) {
    throw {
      statusCode: 404,
      message: 'Client not registered or incorrect data. Check the fields and try again.',
    };
  }

  const [emailExists] = await getClientByEmailModel(email);

  if (emailExists) {
    if (emailExists.id !== Number(id)) {
      throw {
        statusCode: 409,
        message: 'A client with the provided email address is already registered',
      };
    }
  }

  const [cpfExists] = await getClientByCpfModel(cpf);

  if (cpfExists) {
    if (cpfExists.id !== Number(id)) {
      throw {
        statusCode: 409,
        message: 'A client with the provided cpf is already registered',
      };
    }
  }

  const updateClient = await updateClientModel({
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado,
  }, id);

  return updateClient;
};

module.exports = updateClientService;
