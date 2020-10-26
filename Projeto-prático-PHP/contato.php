<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato - Full Stach Eletro</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <!-- Menu -->
    <nav>
        <a href="index.html"><img id="logo" src="./img/logo.jpeg" alt="Full Stack Eletro"></a>
        <a class="link" onmouseover="onMenu(this)" onmouseout="outMenu(this)" href="./produtos.html">Produtos</a>
        <a class="link" onmouseover="onMenu(this)" onmouseout="outMenu(this)" href="./loja.html">Nossas lojas</a>
        <a class="link" onmouseover="onMenu(this)" onmouseout="outMenu(this)" href="./contato.html">Fele conosco</a>
    </nav>
    <!-- Fim do Menu -->

    <h2 class="mag">Contato</h2>
    <hr>

    <main class="contContato">
        <section class="formContato">
            <form>
                <h3>Deixe sua opinião / reclamação</h3>
                <input class="impNome" id="nome" type="text" placeholder="Seu nome:">
                <br>
                <input class="impEmail" id="email" type="email" placeholder="Seu E-mail:">
                <br>
                <textarea class="impText" id="texto" placeholder="Seu texto:"></textarea><br>
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
    <br>
    <footer>
        <p id="form_pag">Formas de pagamento</p>
        <img src="./img/cartoes.png" width="300" alt="Formas de pagamento">
        <p id="copy">&copy; Recode Pro</p>
    </footer>
    <script src="./js/script.js"></script>
</body>

</html>