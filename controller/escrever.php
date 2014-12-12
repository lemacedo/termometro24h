<?php
$arquivo = fopen('temperatura.txt','w+');
if ($arquivo) {
	if (!fwrite($arquivo, 'temperatura')) die('Não foi possível atualizar o arquivo.');
	echo 'Arquivo atualizado com sucesso';
	fclose($arquivo);
}
?>