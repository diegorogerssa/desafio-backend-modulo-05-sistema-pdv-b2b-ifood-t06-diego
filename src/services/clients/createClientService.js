const { createClientModel, getClientByEmailModel, getClientByCpfModel } = require('../../models');

const createClientService = async (clientData) => {
  const { nome, email, cpf } = clientData;
  const [emailExists] = await getClientByEmailModel(email);

  if (emailExists) {
    throw {
      statusCode: 409,
      message: 'A client with the provided email address is already registered',
    };
  }

  const [cpfExists] = await getClientByCpfModel(cpf);

  if (cpfExists) {
    throw {
      statusCode: 409,
      message: 'A client with the provided cpf is already registered',
    };
  }

  const [client] = await createClientModel({ nome, email, cpf });
  return client;
};

module.exports = createClientService;
