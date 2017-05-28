
<?php
$user = $_POST['user'];
$password = $_POST['password'];

	echo "($user)";
	echo "<h2>TCP/IP Connection</h2>\n";

/* Obtener el puerto para el servicio WWW. */
$service_port = '8000';

/* Obtener la dirección IP para el host objetivo. */
$address = '192.168.0.105';

/* Crear un socket TCP/IP. */
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() falló: razón: " . socket_strerror(socket_last_error()) . "\n";
} else {
    echo "OK.\n";
}

echo "Intentando conectar a '$address' en el puerto '$service_port'...";
$result = socket_connect($socket, $address, $service_port);
if ($result === false) {
    echo "socket_connect() falló.\nRazón: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
} else {
    echo "OK.\n";
}

$in = "login\r\n";
$in .= "federico \r\n";
$in .= "1234 \r\n";
$out = '';

echo "Enviando petición HTTP HEAD ...";
socket_write($socket, $in, strlen($in));
echo "OK.\n";

echo "Leyendo respuesta:\n\n";
while ($out = socket_read($socket, 2048)) {
    echo $out;
}

echo "Cerrando socket...";
socket_close($socket);
echo "OK.\n\n";


?>
