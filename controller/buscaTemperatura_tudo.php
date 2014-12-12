<?php
header('Content-Type: application/json; charset=utf-8;'); 
$file = file_get_contents("http://developers.agenciaideias.com.br/tempo/json/itarare-SP");
print_r(json_decode($file));



?>