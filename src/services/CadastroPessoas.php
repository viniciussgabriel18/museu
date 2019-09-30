<?php

/* Abre uma concecção com o banco de dados */
$dbconnect = new mysqli("localhost", "root","" ,"Museu");

/*Valores recebidos do Formulário */
$nome = $_POST["nome"];
$idade = $_POST["idade"];
$escolaridade = $_POST["escolaridade"];
$instituicao = $_POST["instituicao"];
$turista = $_POST["turista"];
$comentario = $_POST["comentario"];

/* Verifica se ocorreu algum erro na conecção*/

if ($dbconnect->connect_error)  {
    echo ("Erro ao Conectar");
}else {
       
    $sql = "INSERT INTO Dados_cadastro (nome, idade, escolaridade_id, turista, instituicao, comentario)
     VALUES (('$nome'), ('$idade'), ('$escolaridade'), ('$turista'), ('$instituicao'), ('$comentario'))";

    if($dbconnect->query($sql)){
        header('Location: ../../index.html');
    }else {
        echo("Deu errado");
    }
}

$dbconnect->close ();

?>