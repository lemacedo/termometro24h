<?php

$url = "http://api.openweathermap.org/data/2.5/find?q=bom%20sucesso%20de%20itarare";

//string json contendo os dados de um funcionário
 $json_str = file_get_contents($url);
 //faz o parsing na string, gerando um objeto PHP 
 $obj = json_decode($json_str); 
 //imprime o conteúdo do objeto 
 $temp_K =  $obj->list[0]->main->temp; 

 //Converte de Kelvin para Celsius
 $temp_C = $temp_K - 273.15; 

 echo $temp_C;

 echo "<br/> Kelvin: ". $temp_K;






?>