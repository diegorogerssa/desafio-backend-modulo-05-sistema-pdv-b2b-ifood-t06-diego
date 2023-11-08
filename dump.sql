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

CREATE TABLE produtos(
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(150) NOT NULL,
  quantidade_estoque INTEGER NOT NULL,
  valor INTEGER NOT NULL,
  categoria_id INTEGER NOT NULL,
  produto_imagem TEXT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
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

CREATE TABLE pedidos(
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER,
  observacao TEXT,
  valor_total INTEGER,
  FOREIGN KEY(cliente_id) REFERENCES clientes(id) 
);

CREATE TABLE pedido_produtos(
  id SERIAL PRIMARY KEY, 
  pedido_id INTEGER,
  produto_id INTEGER,
  quantidade_produto INTEGER,
  valor_produto INTEGER,
  FOREIGN KEY(pedido_id) REFERENCES pedidos(id), 
  FOREIGN KEY(produto_id) REFERENCES produtos(id) 
);


