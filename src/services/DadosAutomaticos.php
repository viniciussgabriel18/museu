<?php

require_once ("./FuncAuxiliares.php");
$dbconnect = Conectar();
$opcao = isset ($_GET['opcao']) ? $_GET['opcao']: '';

    
function getVisitantesAno($dbconnect, $data) {
    $vistitantesAnos = $dbconnect->query("SELECT COUNT(*) AS quant FROM Dados_cadastro WHERE YEAR(data_cadastro) = $data");
    $result = $vistitantesAnos->fetch_assoc ();
    echo json_encode($result);
}

function getVisitantesMes ($dbconnect, $mes){
    $visitantesMes = $dbconnect->query ("SELECT COUNT(*) AS quant FROM Dados_cadastro WHERE MONTH(data_cadastro) = $mes");
    $result = $visitantesMes->fetch_assoc ();
    echo json_encode($result);
}

function getTotalVisitantes($dbconnect){
    $totalVisitantes = $dbconnect->query("SELECT COUNT(*) AS quant FROM Dados_cadastro");
    $result = $totalVisitantes->fetch_assoc ();
    echo json_encode($result);
} 


switch ($opcao){
    case 'ano':{
        $data = new DateTime ();
        $data = $data->format('Y');
        getVisitantesAno ($dbconnect, $data);
        break;
    }

    case 'mes': {
        $data = new DateTime();
        $data = $data->format('m');
        getVisitantesMes($dbconnect, $data);
        break;
    }

    case 'total': {
        getTotalVisitantes($dbconnect);
    }
}

$dbconnect->close ();

?>