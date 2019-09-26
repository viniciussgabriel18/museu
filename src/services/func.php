<?php

$con = new PDO("mysql:host=localhost; dbname=Museu;", "root", ""); 
$sql = "SELECT `id`, `name` FROM `countries`";

$paises = $con->prepare ($sql);
$paises->execute();
echo json_encode($paises->fetchAll(PDO::FETCH_ASSOC));

?>