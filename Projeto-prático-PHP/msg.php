<?php 
    include_once("conect.php");

    session_start();
    if(!isset($_SESSION['nomecliente']) && !isset($_SESSION['idcliente'])){
        echo "<script>window.location.href='login.php';alert('Faça login ou cadastre-se para deixar uma opinião / reclamação!');</script>";
    }

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    $idCliente = $_SESSION["idcliente"];
 
    if(!empty($nome) && !empty($email) && !empty($msg)){
        if($nome < 7 && $email < 10){
            $registrar = "insert into mensagem (`idcliente`, `emailretorno`,`assinado`, `msg`) values ('$idCliente', '$email', '$nome', '$msg')";
            $result_reg = $conn->query($registrar);
            // -- Retorna resultado da insersão do banco de dados --
            if ($result_reg) {
                echo "<script> alert('Enviado com sucesso!')
                window.location.href='contato.php' </script>";
            } else {
                echo "<script> alert('Houve um erro, tente novamente!')
                window.location.href='contato.php' </script>";
            }
        }else{
            echo "<script> alert('O campo nome ou e-mail não tem caracteres suficiente.');
            window.location.href='contato.php' </script>";
        }
    }else{
        echo "<script>window.location.href='contato.php';alert('Preencha todos os campos!');</script>";
    }
?>