CREATE TABLE usuarios(
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(150) NOT NULL
);

CREATE TABLE categorias(
  id BIGSERIAL PRIMARY KEY,
  descricao VARCHAR(150) NOT NULL
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