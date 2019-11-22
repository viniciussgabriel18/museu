<?php
require_once("./FuncAuxiliares.php");

$dbconnect = Conectar();
setCharset($dbconnect);

// Busca todas as informações da escolaridade no banco de dados
function BuscaEscolaridade($dbconnect) {
    $result = array();
    
    $sql = "SELECT * FROM escolaridade";
    $query = $dbconnect->query ($sql);

    while ($row = $query->fetch_assoc ()){
        array_push ($result, $row);
    }

    echo json_encode ($result);
}

BuscaEscolaridade ($dbconnect);

$dbconnect->close();

?>