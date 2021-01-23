<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato - Full Stach Eletro</title>
    <link rel="stylesheet" href="./css/menu.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/contato.css">
</head>

<body>
    <div class="container">
        <header>
            <!-- Menu -->
            <?php include_once("menu.php") ?>
            <!-- Fim do Menu -->
            <h2 class="mag">Contato</h2>
            <hr>
        </header>

        <main class="contContato">
            <section class="formContato">
                <form action="msg.php" method="POST">
                    <h3>Deixe sua opinião / reclamação</h3>
                    <input class="impNome" name="nome" type="text" placeholder="Seu nome:"><br>
                    <input class="impEmail" name="email" value="<?php echo $emailCliente; ?>" type="email" placeholder="Seu E-mail:"><br>
                    <textarea class="impText" name="msg" placeholder="Sua mensagem:"></textarea><br>
                    <input class="impBtn" type="submit" value="Enviar">
                </form>
            </section>
            <section class="contatos">
                <div>
                    <img class="imgContatoEmail" src="./img/email.png" alt="E-mail">
                    <label class="textContatoEmail">contato@fullstackeletro.com</label>
                    <br>
                    <img class="imgContatoWhats" src="./img/whats.png" alt="Whatsapp">
                    <label class="textContatoWhats">(11) 99999-9999</label>
                </div>
            </section>
        </main>
    </div>
    <!-- Footer -->
    <?php include_once("footer.html"); ?>
    <!-- Fim Footer -->
    <script src="./js/script.js"></script>
</body>

</html>