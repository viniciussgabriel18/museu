<?php

require_once ("./FuncAuxiliares.php");

$dbconnect = Conectar();
setCharset($dbconnect);

// Solicitação enviada pelo GET
$opcao = isset($_GET['busca']) ? $_GET['busca'] : '';

// Select de todos os Paises
function BuscaPais($dbconnect) {
    $result = array ();
    $sql = "SELECT * FROM paises ORDER BY nome";
    $query = $dbconnect->query ($sql);
    
    while ($row = $query->fetch_assoc ()){
        array_push ($result, $row);
    }
    echo json_encode($result);
}

// Select de todos os estados de um pais
function BuscaEstados($dbconnect, $country_id) {
    $result = array();
    $sql = "SELECT * FROM estados WHERE paise_id = $country_id";
    $query = $dbconnect->query($sql);
    
    if ($query->num_rows != 0){
        while ($row = $query->fetch_assoc()) {
            array_push($result, $row);
        }
        echo json_encode($result);
    }else {
        $result = null;
        echo json_encode ($result);
    } 
}

// Select de todas as cidades de um estado
function BuscaCidades($dbconnect, $state_id) {
    $result = array();
    $sql = "SELECT * FROM cidades WHERE estado_id = $state_id";
    $query = $dbconnect->query($sql);

    while ($row = $query->fetch_assoc()) {
        array_push($result, $row);
    }
    echo json_encode($result);
}

// Select das cidades de um pais
function BuscacidadePais ($dbconnect, $country_id){
    $result = array();
    $sql = "SELECT * FROM cidades WHERE paise_id = $country_id";
    $query = $dbconnect->query($sql);

    while ($row = $query->fetch_assoc()) {
        array_push($result, $row);
    }

    echo json_encode($result);
}

// Verifica qual solicitação foi recebida por GET e Chama um SELECT 

    switch ($opcao){
        case 'country':{
            BuscaPais($dbconnect);
            break;}

        case 'states':{
             $country_id = isset ($_GET['idPais']) ? $_GET['idPais']: '';
            BuscaEstados ($dbconnect, $country_id);
            break;}
            
        case 'cities':{
            $stateId = isset($_GET['idState']) ? $_GET['idState'] : '';
            BuscaCidades($dbconnect, $stateId);
            break;}
        
        case 'cidadePais':{
            $country_id = isset($_GET['idPais']) ? $_GET['idPais'] : '';
            BuscacidadePais($dbconnect, $country_id);
            break;}
    }
   
$dbconnect->close ();

?>