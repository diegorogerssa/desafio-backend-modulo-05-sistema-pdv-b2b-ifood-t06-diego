const knex = require('../../database/knex');
const aws = require('../../aws')
const dotenv = require('dotenv')

dotenv.config()

const registerProductModel = async (productData, produto_imagem) => {
  const {
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
  } = productData;

  const arquivo = await aws.upload({
    Bucket: process.env.BUCKET_NAME,
    Key: `imagens/${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype
  }).promise()

  const img = {
    url:arquivo.Location,
    path: arquivo.Key
  }

  console.log(img.url)

  const product = await knex('produtos')
    .insert({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
      produto_imagem: img.url
    })
    .returning([
      'id',
      'descricao',
      'quantidade_estoque',
      'valor',
      'categoria_id',
      'produto_imagem'
    ]);

  return product;
};

module.exports = registerProductModel;
