<?php 
require_once ("./FuncAuxiliares.php");

$dbconnect = Conectar ();

$idioma = isset ($_GET['idioma']) ? $_GET['idioma']: '';


function BucaTitulos($dbconnect, $idioma) {
    $result = array ();
    $sql = "SELECT * FROM titulos WHERE id = $idioma";
    $query = $dbconnect->query ($sql);

    while ($row = $query->fetch_assoc ()){
        array_push ($result, $row);
    }

    echo json_encode($result);
}

BucaTitulos ($dbconnect, $idioma);

$dbconnect->close ();

?>