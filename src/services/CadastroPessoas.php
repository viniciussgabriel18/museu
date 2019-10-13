<?php

require_once ("./FuncAuxiliares.php");

/* Abre uma concecção com o banco de dados */
$dbconnect = Conectar();

/*Valores recebidos do Formulário */
$nome = $_POST["nome"];
$idade = $_POST["idade"];
$escolaridade = $_POST["escolaridade"];
$instituicao = $_POST["instituicao"];
$turista = isset ($_POST["turista"])? $_POST["turista"]: 0;
$comentario = $_POST["comentario"];
$data = GeraData();

/* Verifica se ocorreu algum erro na conecção*/
if ($dbconnect->connect_error)  {
    echo ("Erro ao Conectar");
}else {

    $sql = "INSERT INTO Dados_cadastro (nome, idade, escolaridade_id, instituicao,turista, comentario, data_cadastro)
     VALUES (('$nome'), ('$idade'), ('$escolaridade'), ('$instituicao'),('$turista'), ('$comentario'), ('$data'))";

    if($dbconnect->query($sql)){
        header('Location: ../../index.html');
    }else {
        echo("Não Possivel Salvar os Dados");
    }
}

$dbconnect->close ();

?>