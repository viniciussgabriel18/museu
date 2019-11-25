<?php
require_once ("./FuncAuxiliares.php");

$dbconnect = Conectar ();
setCharset($dbconnect);

$data_inicial = isset($_GET['dataInicial']) ? $_GET['dataInicial']: "2019-11-20";
$data_final = isset ($_GET['dataFinal']) ? $_GET['dataFinal']: "2020-01-01"; 

function geraRelatorio($dbconnect, $data_inicial, $data_final) {
    $result = array ();
    // $data = "%d/%m/%y";

    $sql = "SELECT ass.nome,ass.idade,ass.instituicao,ass.profissao,ass.comentario,DATE_FORMAT(ass.data_cadastro, '%d/%m/%Y') as data_cadastro, 
    esc.descricao as escolaridade,ps.nome as pais,st.nome as estado,cd.nome as cidade 
    from assinaturas as ass inner join 
    cidades as cd on ass.cidade_id=cd.id INNER JOIN 
    paises as ps on ps.id=cd.paise_id LEFT JOIN 
    estados as st on st.id=cast(cd.estado_id as int)INNER JOIN
    escolaridade as esc on esc.id=ass.escolaridade_id
    WHERE ass.data_cadastro >= '$data_inicial' AND ass.data_cadastro <= '$data_final' ";

    $query = $dbconnect->query ($sql);
    while ($row = $query->fetch_assoc()){

        array_push ($result, $row);
    }

    echo json_encode ($result);
}

geraRelatorio ($dbconnect, $data_inicial, $data_final);

?>