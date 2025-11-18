
-- 1. INSERÇÃO DE CATEGORIAS (RF005 - Manter Categoria)


-- Assumindo que a tabela se chama CATEGORIA e tem os campos (id, nome, ativo)

INSERT INTO CATEGORIA (nome, ativo) VALUES
('Notebook', TRUE),
('Desktop', TRUE),
('Impressora', TRUE),
('Mouse', TRUE),
('Teclado', TRUE);



-- 2. INSERÇÃO DE USUÁRIOS (Funcionários e Clientes)

-- FUNCIONÁRIOS (ROLE = 'FUNCIONARIO')
INSERT INTO USUARIO (nome, cpf, email, senha, role) VALUES
('Maria Silva', '11111111111', 'maria@empresa.com', '$2a$10$tJ9.rG9sY0s8.Jq.sM2cE.d6.S8G9w4S8V9F8R2I8M8C6F3T7Z0', 'FUNCIONARIO'),
('Mário Souza', '22222222222', 'mario@empresa.com', '$2a$10$tJ9.rG9sY0s8.Jq.sM2cE.d6.S8G9w4S8V9F8R2I8M8C6F3T7Z0', 'FUNCIONARIO');

-- CLIENTES (RF001 - Autocadastro) (ROLE = 'CLIENTE')
INSERT INTO USUARIO (nome, cpf, email, senha, role) VALUES
('João da Rocha', '33333333333', 'joao@cliente.com', '$2a$10$tJ9.rG9sY0s8.Jq.sM2cE.d6.S8G9w4S8V9F8R2I8M8C6F3T7Z0', 'CLIENTE'),
('José de Almeida', '44444444444', 'jose@cliente.com', '$2a$10$tJ9.rG9sY0s8.Jq.sM2cE.d6.S8G9w4S8V9F8R2I8M8C6F3T7Z0', 'CLIENTE'),
('Joana Matos', '55555555555', 'joana@cliente.com', '$2a$10$tJ9.rG9sY0s8.Jq.sM2cE.d6.S8G9w4S8V9F8R2I8M8C6F3T7Z0', 'CLIENTE'),
('Joaquina Mendes', '66666666666', 'joaquina@cliente.com', '$2a$10$tJ9.rG9sY0s8.Jq.sM2cE.d6.S8G9w4S8V9F8R2I8M8C6F3T7Z0', 'CLIENTE');


