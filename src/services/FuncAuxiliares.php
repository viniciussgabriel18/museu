<?php

function GeraData() {
    date_default_timezone_set('Brazil/Acre');

    $data = new DateTime();
    // $data = new DateTime ('+1 Year');
    $data = $data->format('Y-m-d H:i:s');
    return $data;
}

 function Conectar() {
    $dbconnect = new mysqli("localhost", "root", "", "Museu");
    if ($dbconnect->connect_error){

    }else {
        return $dbconnect;
    }
}

?>