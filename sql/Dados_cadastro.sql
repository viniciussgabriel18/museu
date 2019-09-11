CREATE TABLE IF NOT EXISTS Dados_cadastro (
  id INT PRIMARY KEY AUTO_INCREMENT ,
  nome VARCHAR (70),
  idade INT,
  insituicao VARCHAR (30),
  escolaridade_id INT,
  turista BOOLEAN,
  comentario VARCHAR (255),
  data_cadastro DATETIME,
  cidade_id INT
);

ALTER TABLE Dados_cadastro ADD FOREIGN KEY (escolaridade_id) REFERENCES escolaridade(id);
ALTER TABLE Dados_cadastro ADD FOREIGN KEY (cidade_id) REFERENCES cities(id);

INSERT INTO Dados_cadastro (nome, idade) VALUES
('Vinicius Gabriel', 19),
('Gabriel de Souza', 20);
