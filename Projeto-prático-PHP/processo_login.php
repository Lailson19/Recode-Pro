<?php
    include("conect.php");

    $email = $_POST['email'];
    $senha = $_POST['senha'];

    if(!empty($email) && !empty($senha)){
        $senhaCrip = md5($senha);
        $pegarInfo = "select * from cliente where emailcliente = '$email' and senhacliente = '$senhaCrip'";
        $result = $conn->query($pegarInfo);
        $qnt_dados = mysqli_num_rows($result);

        if ($qnt_dados == 1) {
            $dados = mysqli_fetch_assoc($result);

            session_start();
            $_SESSION["nomecliente"] = $dados['nomecliente'];
            $_SESSION["emailcliente"] = $dados['emailcliente'];
            $_SESSION["idcliente"] = $dados['idcliente'];
    
            header('Location: index.php');
    
        } else {
            echo "Não existe esse cadastro!";
            header("Refresh:3; url=index.php");
        }
    }else{
        echo "<script> alert('Todos os campos precisam ser preenchidos!') 
        window.location.href='login.php' </script>";
    }
