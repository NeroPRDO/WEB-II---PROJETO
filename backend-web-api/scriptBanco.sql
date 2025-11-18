
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


INSERT INTO SOLICITACAO (id, data_hora_solicitacao, descricao_equipamento, detalhes_problema, estado, cliente_id, categoria_id) VALUES
(1001, '2025-10-10 10:00:00', 'Notebook Dell XPS 13', 'Tela piscando após atualização do Windows.', 'CONCLUIDO', 3, 1),
(1002, '2025-10-15 14:30:00', 'Impressora HP OfficeJet', 'Não reconhece cartuchos de tinta, erro 404.', 'AGUARDANDO_PAGAMENTO', 3, 3),
(1003, '2025-10-20 09:15:00', 'Mouse Logitech G Pro', 'Botão esquerdo falhando, duplo clique indesejado.', 'EM_MANUTENCAO', 3, 4),
(1004, '2025-10-25 11:45:00', 'Teclado Mecânico HyperX', 'Teclas Z, X, C não funcionam. Talvez sujeira.', 'CANCELADO', 3, 5),
(1005, '2025-11-01 16:20:00', 'Notebook Samsung Odyssey', 'Bateria não carrega além de 50%.', 'ORCAMENTO', 3, 1);

INSERT INTO HISTORICO_SOLICITACAO (solicitacao_id, estado_anterior, estado_atual, data_alteracao, usuario_responsavel_id) VALUES
(1001, 'ABERTO', 'ORCAMENTO', '2025-10-10 11:00:00', 1), -- Maria
(1001, 'ORCAMENTO', 'AGUARDANDO_PAGAMENTO', '2025-10-11 10:00:00', 2), -- Mário
(1001, 'AGUARDANDO_PAGAMENTO', 'EM_MANUTENCAO', '2025-10-12 09:00:00', 1), -- Maria (Pagamento Aprovado)
(1001, 'EM_MANUTENCAO', 'CONCLUIDO', '2025-10-13 14:00:00', 2); -- Mário
