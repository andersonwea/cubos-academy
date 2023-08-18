-- CREATE DATABASE supermecado;

CREATE TABLE clientes (
	cpf CHAR(11) PRIMARY KEY UNIQUE,
  nome VARCHAR(150)
);

CREATE TABLE vendedores (
	cpf CHAR(11) PRIMARY KEY UNIQUE,
  nome VARCHAR(150)
);

CREATE TABLE pedidos (
	id SERIAL PRIMARY KEY,
  valor INTEGER,
  cliente_cpf CHAR(11) REFERENCES clientes(cpf) ON DELETE CASCADE,
  vendedor_cpf CHAR(11) REFERENCES vendedores(cpf) ON DELETE CASCADE
);

CREATE TABLE categorias (
	id SERIAL PRIMARY KEY,
  nome VARCHAR(50)
);

CREATE TABLE produtos (
	id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  descricao TEXT,
  preco INTEGER,
  quantidade_em_estoque INTEGER,
  categoria_id INTEGER REFERENCES categorias(id) ON DELETE CASCADE
);

CREATE TABLE itens_do_pedido (
	id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES pedidos(id) ON DELETE CASCADE,
  quantidade INTEGER,
  produto_id INTEGER REFERENCES produtos(id) ON DELETE CASCADE
);

-- 1)
INSERT INTO categorias
(nome)
VALUES
('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');

-- 2)
INSERT INTO produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id)
VALUES
('Mamão', 'Rico em vitamina A, potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras.', 90, 34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C.', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais', 690, 5, 3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.', 700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l', 'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

-- 3)
INSERT INTO clientes
(cpf, nome)
VALUES
('80371350042',	'José Augusto Silva'),
('67642869061',	'Antonio Oliveira'),
('63193310034',	'Ana Rodrigues'),
('75670505018',	'Maria da Conceição');

-- 4)
INSERT INTO vendedores
(cpf, nome)
VALUES
('82539841031',	'Rodrigo Sampaio'),
('23262546003',	'Beatriz Souza Santos'),
('28007155023',	'Carlos Eduardo');

-- 5)
	-- a)
  INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
  VALUES
  (9650, '80371350042', '28007155023');
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9650) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%mamão%') subselect2;
  
  UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%mamão%';
  
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9650) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%pepsi%') subselect2;
  
  UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%pepsi%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 6, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9650) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%heineken%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 6
  WHERE nome ILIKE '%heineken%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9650) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%escova%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%escova%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 5, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9650) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%maça%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 5
  WHERE nome ILIKE '%maça%';
  
	-- b)
  INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
  VALUES
  (6460, '63193310034', '23262546003');
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 10, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 6460) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%manga%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 10
  WHERE nome ILIKE '%manga%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 3, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 6460) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%uva%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 3
  WHERE nome ILIKE '%uva%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 5, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 6460) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%mamão%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 5
  WHERE nome ILIKE '%mamão%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 10, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 6460) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%tomate%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 10
  WHERE nome ILIKE '%tomate%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 2, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 6460) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%acelga%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 2
  WHERE nome ILIKE '%manga%';
  ----------------------------------------------------------------------------------
  
  
  -- c)
  INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
  VALUES
  (3470, '75670505018', '23262546003');
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 3470) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%vassoura%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%vassoura%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 6, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 3470) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%agua%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 6
  WHERE nome ILIKE '%agua%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 5, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 3470) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%manga%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 5
  WHERE nome ILIKE '%manga%';
  
  -------------------------------------------------------------------------------------
  
  -- d)
  INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
  VALUES
  (9370, '75670505018', '82539841031');
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%balde%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%balde%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 6, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%uva%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 6
  WHERE nome ILIKE '%uva%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%macarrão%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%macarrão%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%mamão%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%mamão%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 20, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%tomate%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 20
  WHERE nome ILIKE '%tomate%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 2, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%acelga%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 2
  WHERE nome ILIKE '%acelga%';
  --------------------------------------------------------------------------------------
  
  -- e)
  INSERT INTO pedidos
  (valor, cliente_cpf, vendedor_cpf)
  VALUES
  (8229, '67642869061', '82539841031');
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 8, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 8229) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%uva%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 8
  WHERE nome ILIKE '%uva%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 1, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%massa%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 1
  WHERE nome ILIKE '%massa%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 3, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%manga%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 3
  WHERE nome ILIKE '%manga%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 8, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%tomate%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 8
  WHERE nome ILIKE '%tomate%';
  
  INSERT INTO itens_do_pedido
  (pedido_id, quantidade, produto_id)
  SELECT subselect1.pedido_id, 2, subselect2.produto_id
  FROM (SELECT id AS pedido_id FROM pedidos WHERE valor = 9370) subselect1,
  		 (SELECT id AS produto_id FROM produtos WHERE nome ILIKE '%heineken%') subselect2;
  
    UPDATE produtos
  SET quantidade_em_estoque = quantidade_em_estoque - 2
  WHERE nome ILIKE '%heineken%';
  
  


