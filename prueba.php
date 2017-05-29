
<?php
$user = $_POST["user"];
$password = $_POST["password"];
	
	

/* Obtener el puerto para el servicio WWW. */
$service_port = '8000';

/* Obtener la dirección IP para el host objetivo. */
$address = '192.168.0.104';

/* Crear un socket TCP/IP. */
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() falló: razón: " . socket_strerror(socket_last_error()) . "\n";
} 


$result = socket_connect($socket, $address, $service_port);
if ($result === false) {
    echo "socket_connect() falló.\nRazón: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} 

$in = "login\r\n";
$in .= "$user\r\n";
$in .= "$password\r\n";
$out = '';


socket_write($socket, $in, strlen($in));



while ($out = socket_read($socket, 2048)) {
    
    		echo ($out);
    	
}


socket_close($socket);



?>
