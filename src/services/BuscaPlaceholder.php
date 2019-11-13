<?php

require_once ("./FuncAuxiliares.php");

$dbconnect = Conectar ();
setCharset ($dbconnect);

$opcao = isset($_GET['idioma']) ? $_GET['idioma'] : '';


function BuscaPlace($dbconnect, $idioma) {
    $result = array ();

    $sql = "SELECT * FROM placeholder WHERE id = $idioma";
    $query = $dbconnect->query ($sql);

    while ($row = $query->fetch_assoc()){
        array_push ($result, $row);
    }

    echo json_encode ($result);
}

BuscaPlace ($dbconnect, $opcao);

?>