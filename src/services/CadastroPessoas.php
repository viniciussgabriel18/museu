<?php

require_once ("./FuncAuxiliares.php");

/* Abre uma concecção com o banco de dados */
$dbconnect = new mysqli("localhost", "root", "", "Museu");

/*Valores recebidos do Formulário */
$nome = isset ($_POST["nome"]) ? $_POST["nome"] : NULL;
$idade = isset($_POST["idade"]) ? $_POST["idade"]: NULL;
$escolaridade = isset ($_POST["escolaridade"]) ? $_POST["escolaridade"]: NULL ;
$instituicao = isset ($_POST["instituicao"]) ? $_POST["instituicao"]: NULL;
$profissao = isset($_POST["profissao"]) ? $_POST["profissao"]: NULL ;
$comentario = isset ($_POST["comentario"]) ? $_POST["comentario"]: NULL ;
$data = GeraData();
$cidade = isset ($_POST["cidade"]) ? $_POST["cidade"]: NULL; 

if ($cidade == 'null' or $cidade == 'undefined'){
    $cidade = 0;   
}

if ($escolaridade == 'null'){
    $escolaridade = 0;
}

/* Verifica se ocorreu algum erro na conecção*/
if ($dbconnect->connect_error)  {
    echo ("Erro ao Conectar");
}else {
    
    $sql = "INSERT INTO `assinaturas` (nome, idade, instituicao, escolaridade_id, profissao, comentario, data_cadastro, cidade_id)
    VALUES ('$nome','$idade','$instituicao','$escolaridade','$profissao', '$comentario','$data', '$cidade')";

    if($dbconnect->query($sql)){
        header('Location: ../../index.html');
    }else {
        echo ($cidade);
        echo("Não é Possivel Salvar os Dados");
    }
}

$dbconnect->close ();

?>