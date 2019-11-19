<?php

require_once ("./FuncAuxiliares.php");

$dbconnect = Conectar ();
setCharset ($dbconnect);

$opcao = isset($_GET['idioma']) ? $_GET['idioma'] : '';

function BuscaLabel($dbconnect, $idLang) {
    $result = array ();

    $sql = "SELECT * FROM label WHERE id = $idLang";
    $query = $dbconnect->query($sql);

    while ($row = $query->fetch_assoc()){
        array_push ($result, $row);
    }

    echo json_encode($result);
}

BuscaLabel ($dbconnect, $opcao);

$dbconnect->close ();

?>