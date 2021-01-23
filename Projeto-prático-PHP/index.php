<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Full Stack Eletro</title>
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/style_inicio.css">
    <link rel="stylesheet" href="./css/menu.css">
    <link rel="stylesheet" href="./css/footer.css">
</head>

<body>
    <div class="container">
        <header>
            <!-- Menu -->
            <?php include_once("menu.php") ?>
            <!-- Fim do Menu -->
            <h2 class="mag">Seja bem vindo(a). <?php echo $nomeCliente; ?></h2>
            <hr>
        </header>

        <section>
            <p class="mag">Aqui em nossa loja <em>programadores tem desconto</em> nos produtos para sua casa!</p>
        </section>

    </div>
    <!-- Footer -->
    <?php include_once("footer.html"); ?>
    <!-- Fim Footer -->
    <script src="./js/script.js"></script>
</body>

</html>