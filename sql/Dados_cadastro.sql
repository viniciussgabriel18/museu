CREATE TABLE IF NOT EXISTS Dados_cadastro (
  id INT PRIMARY KEY AUTO_INCREMENT ,
  nome VARCHAR (70),
  idade INT,
  instituicao VARCHAR (30),
  escolaridade_id INT,
  turista BOOLEAN,
  comentario VARCHAR (255),
  data_cadastro DATETIME,
  cidade_id INT
);

ALTER TABLE Dados_cadastro ADD FOREIGN KEY (escolaridade_id) REFERENCES escolaridade(id);