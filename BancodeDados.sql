-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS cadastro_usuarios;
USE cadastro_usuarios;

-- Tabela para usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY, -- ID único para cada usuário
    nome VARCHAR(100) NOT NULL,        -- Nome do usuário
    email VARCHAR(100) NOT NULL UNIQUE, -- E-mail único e obrigatório
    telefone VARCHAR(15) DEFAULT NULL, -- Telefone opcional
    senha_hash VARCHAR(255) NOT NULL,  -- Senha armazenada como hash
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data e hora do cadastro
);

-- Inserção de um usuário exemplo
INSERT INTO usuarios (nome, email, telefone, senha_hash) 
VALUES ('Seu Nomme', 'seunome@email.com', '11999999999', SHA2('senha123', 256));
