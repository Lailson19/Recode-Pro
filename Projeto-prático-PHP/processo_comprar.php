<?php include_once('conect.php');

session_start();
if(!isset($_SESSION['nomecliente']) && !isset($_SESSION['idcliente'])){
    echo "<script>window.location.href='login.php';alert('Faça login ou cadastre-se para fazer um pedido!');</script>";

    }else{

        $idCliente = $_SESSION["idcliente"];
        $produtoCompra = $_POST['idproduto'];
        $qntproduto = $_POST['qnt'];

        if(!empty($qntproduto)){
            $pegarInfo = "insert into pedidos(`idcliente`, `idproduto`, `qntpedido`) values ('$idCliente', '$produtoCompra', '$qntproduto');";
            $result = $conn->query($pegarInfo);

            if ($result) {
                echo "<script> alert('Pedido realizado com sucesso!')
                window.location.href='produtos.php' </script>";
            } else {
                echo "<script> alert('Houve um erro, tente novamente!')
                window.location.href='produtos.php' </script>";
            }
        }

    }

