<?php

$dbconnect = new mysqli ("localhost", "root", "", "Museu");

$opcao = isset($_GET['busca']) ? $_GET['busca'] : '';

function BuscaPais($dbconnect) {

    $result = array ();
    $sql = "SELECT * FROM countries";
    $query = $dbconnect->query ($sql);
    
    while ($row = $query->fetch_assoc ()){
        array_push ($result, $row);
    }
    echo json_encode($result);

}

function BuscaEstados($dbconnect, $country_id) {
    $result = array();
    $sql = "SELECT * FROM states WHERE country_id = $country_id";
    $query = $dbconnect->query($sql);

    while ($row = $query->fetch_assoc()) {
        array_push($result, $row);
    }
    echo json_encode($result);
    }

function BuscaCidades($dbconnect, $state_id) {
    $result = array();
    $sql = "SELECT * FROM cities WHERE state_id = $state_id";
    $query = $dbconnect->query($sql);

    while ($row = $query->fetch_assoc()) {
        array_push($result, $row);
    }
    echo json_encode($result);
}

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
            break;
        }
    }
   
?>