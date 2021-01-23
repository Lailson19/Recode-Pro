<?php
include("conect.php");

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$confsenha = $_POST['confsenha'];

if (!empty($nome) && !empty($email) && !empty($senha) && !empty($confsenha)) {
    if ($senha == $confsenha) {
        $pegarInfo = "select emailcliente from cliente where emailcliente = '$email'";
        $result = $conn->query($pegarInfo);
        $qnt_dados = mysqli_num_rows($result);

        if ($qnt_dados > 0) {
            echo "<script> alert('Esse e-mail já existe!')
                window.location.href='login.php' </script>";
        } else {
            $senhaCrip = md5($senha);
            $registrar = "insert into cliente (`nomecliente`, `emailcliente`,`senhacliente`) values ('$nome', '$email', '$senhaCrip')";
            $result_reg = $conn->query($registrar);

            // -- Retorna resultado da insersão do banco de dados --
            if ($result_reg) {
                echo "<script> alert('Enviado com sucesso!')
                window.location.href='login.php' </script>";
            } else {
                echo "<script> alert('Houve um erro, tente novamente!')
                window.location.href='login.php' </script>";
            }
        }
    } else {
        echo "<script> alert('Suas senhas estão diferentes!')
            window.location.href='login.php' </script>";
    }
} else {
    echo "<script> alert('Todos os campos precisam ser preenchidos!')
        window.location.href='login.php' </script>";
}
