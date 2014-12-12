<?php
header('Content-Type: application/json; charset=utf-8;'); 
$file = file_get_contents("http://developers.agenciaideias.com.br/tempo/json/itarare-SP");
$dados = (json_decode($file));

$temp = $dados->agora->temperatura;

echo $temp;

?>