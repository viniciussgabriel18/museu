<?php
require_once("./FuncAuxiliares.php");

$dbconnect = Conectar();
setCharset($dbconnect);

function BuscaEscolaridade($dbconnect) {
    $result = array();
    
    $sql = "SELECT * FROM escolaridade";
    $query = $dbconnect->query ($sql);
    // echo json_encode ($query->fetch_all());

    while ($row = $query->fetch_assoc ()){
        array_push ($result, $row);
    }
    echo json_encode ($result);
}

BuscaEscolaridade ($dbconnect);

$dbconnect->close();

?>