<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Login - Full Stach Eletro</title>
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/login.css">
    <link rel="stylesheet" href="./css/menu.css">
    <link rel="stylesheet" href="./css/footer.css">
</head>

<body>
    <header>
        <!-- Menu -->
        <?php include_once("menu.php") ?>
        <!-- Fim do Menu -->
        <h2 class="mag">Login</h2>
        <hr>
    </header>
    <div class="container">
        <main>
            <section>
                <form action="processo_login.php" method="POST">
                    <h3>Login:</h3>
                    <input class="impEmail" name="email" type="email" placeholder="Seu E-mail:"><br>
                    <input class="impNome" name="senha" type="password" placeholder="Sua senha:"><br>
                    <input class="impBtn" type="submit" value="Enviar">
                </form>
            </section>
            <section>
                <form action="processo_cadastro.php" method="POST">
                    <h3>Cadastro:</h3>
                    <input class="impNome" name="nome" type="text" placeholder="Seu nome:"><br>
                    <input class="impEmail" name="email" type="email" placeholder="Seu E-mail:"><br>
                    <input class="impNome" name="senha" type="password" placeholder="Sua senha:"><br>
                    <input class="impNome" name="confsenha" type="password" placeholder="Confirme seu senha:"><br>
                    <input class="impBtn" type="submit" value="Enviar">
                </form>
            </section>
        </main>

    </div>
    <!-- Footer -->
    <?php include_once("footer.html"); ?>
    <!-- Fim Footer -->
    <script src="./js/script.js"></script>
</body>

</html>