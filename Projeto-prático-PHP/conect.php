<?php
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $database   = "sistema";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if(!$conn){
        die("Falha de conexão com o Banco de Dados: " . mysqli_connect_error());
    }
?>