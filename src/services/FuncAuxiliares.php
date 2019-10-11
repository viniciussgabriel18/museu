<?php

/* Função Para Gerar a data Atual*/
function GeraData() {
    date_default_timezone_set('Brazil/Acre');

    $data = new DateTime();
    $data = $data->format('Y-m-d H:i:s');
    return $data;
}

/* Função para abrir uma conecção com o BD Museu*/
 function Conectar() {
    $dbconnect = new mysqli("localhost", "root", "", "Museu");
    if ($dbconnect->connect_error){

    }else {
        return $dbconnect;
    }
}

/*Função para definir o charset de uma pagina */
function setCharset($dbconnect) {
    header('Content-Type: text/html; charset=utf-8', true);
    $dbconnect->query("SET NAMES 'utf8'");
    $dbconnect->query('SET character_set_connection=utf8');
    $dbconnect->query('SET character_set_client=utf8');
    $dbconnect->query('SET character_set_results=utf8');
    $dbconnect->set_charset("utf8");
}

?>