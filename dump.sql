CREATE TABLE usuarios(
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(150) NOT NULL
);

CREATE TABLE categorias(
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(150) NOT NULL
);

CREATE TABLE produtos(
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(150) NOT NULL,
  quantidade_estoque INTEGER NOT NULL,
  valor INTEGER NOT NULL,
  categoria_id INTEGER NOT NULL
);

INSERT INTO categorias (descricao)
VALUES
  ('Informática'),
  ('Celulares'),
  ('Beleza e Perfumaria'),
  ('Mercado'),
  ('Livros e Papelaria'),
  ('Brinquedos'),
  ('Moda'),
  ('Bebê'),
  ('Games');

  CREATE TABLE clientes(
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  cpf CHAR(11) NOT NULL UNIQUE,
  cep CHAR(8),
  rua VARCHAR(150),
  numero VARCHAR(50),
  bairro VARCHAR(150),
  cidade VARCHAR(150),
  estado VARCHAR(2)
);

