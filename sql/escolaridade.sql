CREATE TABLE IF NOT EXISTS escolaridade (
    id INT,
    descricao VARCHAR (30),
    PRIMARY KEY (id)
);

INSERT INTO escolaridade (id, descricao) VALUES
(1, 'Ensino Fundamental Incompleto'),
(2, 'Ensino Fundamental Completo'),
(3, 'Ensino Medio Incompleto'),
(4, 'Ensino Medio Completo'),
(5, 'Ensino Superior Incompleto'),
(6, 'Ensino Superior Completo');
