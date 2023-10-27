-- Active: 1693835880795@@127.0.0.1@5432@pdv
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
