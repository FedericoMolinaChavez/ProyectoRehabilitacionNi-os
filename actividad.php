<?php
$nivel = $_POST["nivel"];
$intentos = $_POST["numeroIntentos"];
$idActividad = $_POST["idActividad"];
$idPaciente	= $_POST["idPaciente"];
	
echo($idPaciente);
/* Obtener el puerto para el servicio WWW. */
$service_port = '8000';

/* Obtener la dirección IP para el host objetivo. */
$address = '192.168.1.102';

/* Crear un socket TCP/IP. */
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() falló: razón: " . socket_strerror(socket_last_error()) . "\n";
} 


$result = socket_connect($socket, $address, $service_port);
if ($result === false) {
    echo "socket_connect() falló.\nRazón: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} 

$in = "actividad\r\n";
$in .= "$nivel\r\n";
$in .= "$intentos\r\n";
$in .=  "$idActividad\r\n";
$in .= "$idPaciente\r\n";
$out = '';


socket_write($socket, $in, strlen($in));



while ($out = socket_read($socket, 2048)) {
    
    		echo ($out);
    	
}


socket_close($socket);



?>