<?php
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
    echo "socket_create() falló: razón: " . socket_strerror(socket_last_error()) . "\n";
} else {
    echo "OK.\n";
}
?>