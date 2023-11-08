function centsToReal(valorEmCentavos) {
  const valorEmReais = (valorEmCentavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return valorEmReais;
}

module.exports = centsToReal;
