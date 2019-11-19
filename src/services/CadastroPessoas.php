<?php

require_once ("./FuncAuxiliares.php");

/* Abre uma concecção com o banco de dados */
$dbconnect = new mysqli("localhost", "root", "", "Museu");

/*Valores recebidos do Formulário */
$nome = $_POST["nome"];
$idade = $_POST["idade"];
$escolaridade = $_POST["escolaridade"];
$instituicao = $_POST["instituicao"];
$profissao = $_POST["profissao"];
$comentario = $_POST["comentario"];
$data = GeraData();
$cidade = $_POST["cidade"];

/* Verifica se ocorreu algum erro na conecção*/
if ($dbconnect->connect_error)  {
    echo ("Erro ao Conectar");
}else {
    
    $sql = "INSERT INTO `assinaturas` (nome, idade, escolaridade_id, insituicao, profissao, comentario, data_cadastro, cidade_id)
    VALUES ('$nome','$idade','$escolaridade','$instituicao','$profissao', '$comentario','$data', '$cidade')";

    if($dbconnect->query($sql)){
        header('Location: ../../index.html');
    }else {
        echo("Não Possivel Salvar os Dados");
    }
}

$dbconnect->close ();

?>