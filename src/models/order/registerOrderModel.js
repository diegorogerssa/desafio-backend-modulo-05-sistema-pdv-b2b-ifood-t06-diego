/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
const knex = require('../../config/database/knex');
const updateProductModel = require('../product/updateProductModel');

const registerOrderModel = async (clientId, observation, total, product) => {
  const transaction = await knex.transaction();
  try {
    const [pedido] = await transaction('pedidos')
      .insert({
        cliente_id: clientId,
        observacao: observation,
        valor_total: total,
      })
      .returning(['id', 'cliente_id', 'observacao', 'valor_total']);

    const newProductOrder = product.map((productOrder) => ({
      pedido_id: pedido.id,
      produto_id: productOrder.produto_id,
      quantidade_produto: productOrder.quantidade_produto,
      valor_produto: productOrder.valor,
    }));

    const pedido_produtos = await transaction('pedido_produtos').insert(newProductOrder).returning('*');

    const productIds = newProductOrder.map((productOrder) => productOrder.produto_id);

    const existingProducts = await knex('produtos')
      .select('id', 'descricao', 'quantidade_estoque', 'categoria_id', 'valor')
      .whereIn('id', productIds);

    for (const existingProduct of existingProducts) {
      const matchingProductOrder = newProductOrder.find(
        (productOrder) => productOrder.produto_id === existingProduct.id,
      );

      if (matchingProductOrder) {
        await updateProductModel({
          id: existingProduct.id,
          descricao: existingProducts.descricao,
          quantidade_estoque: existingProduct.quantidade_estoque - matchingProductOrder.quantidade_produto,
          valor: existingProducts.valor,
          categoria_id: existingProducts.categoria_id,
        });
      }
    }

    await transaction.commit();
    return { pedido, pedido_produtos };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = registerOrderModel;
