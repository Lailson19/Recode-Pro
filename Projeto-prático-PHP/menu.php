<?php include("conect.php"); 

    session_start();
    if(isset($_SESSION['nomecliente']) && isset($_SESSION['idcliente'])){

        $idCliente = $_SESSION["idcliente"];
        $emailCliente = $_SESSION["emailcliente"];
        $nomeCliente = $_SESSION["nomecliente"];
        $titulo_logoff = "<b>Sair</b>";
        $link_logoff = "logoff.php";
    }else{
        $idCliente = "";
        $emailCliente = "";
        $nomeCliente = "";
        $titulo_logoff = "Login";
        $link_logoff = "login.php";
    }

?>

<nav>
    <a class="capsula-logo" onmouseover="onImg(this)" onmouseout="outImg(this)" href="index.php"><img class="logo" src="./img/logo.png" alt="Full Stack Eletro"></a>
    <div class="grupo_link">
        <a class="link" onmouseover="onMenu(this)" onmouseout="outMenu(this)" href="./produtos.php">Produtos</a>
        <a class="link" onmouseover="onMenu(this)" onmouseout="outMenu(this)" href="./loja.php">Nossas Lojas</a>
        <a class="link" onmouseover="onMenu(this)" onmouseout="outMenu(this)" href="./contato.php">Contatos</a>
        <a class="link" onmouseover="onMenu(this)" onmouseout="outMenu(this)" href="./<?php echo $link_logoff ?>"><?php echo $titulo_logoff ?></a>
    </div>
</nav>