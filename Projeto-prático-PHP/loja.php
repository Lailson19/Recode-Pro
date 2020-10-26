<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Nossas lojas - Full Stack Eletro</title>
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
    <header>
        <h2 class="mag">Nossas lojas</h2>
        <hr>
    </header>
    <section class="unid">
        <div class="agrup">
            <div class="grupoLoja">
                <h3>Rio de Janerio</h3>
                <ul>
                    <li>Avenida Presidente Fargas, 5000</li>
                    <li>10° andar</li>
                    <li>Centro</li>
                    <li>(21) 3333-3333</li>
                </ul>
            </div>
            <div class="grupoLoja">
                <h3>São Paulo</h3>
                <ul>
                    <liAvenida Avenida Paulista, 985>
                        </li>
                        <li>3° andar</li>
                        <li>Jardins</li>
                        <li>(11) 4444-4444</li>
                </ul>
            </div>
            <div class="grupoLoja">
                <h3>Santa Catarina</h3>
                <ul>
                    <li>Rua Major &Aacute;vila, 370</li>
                    <li>Vila Mariana</li>
                    <li>(47) 5555-5555</li>
                </ul>
            </div>
        </div>
    </section>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <footer>
        <p id="form_pag">Formas de pagamento</p>
        <img src="./img/cartoes.png" width="300" alt="Formas de pagamento">
        <p id="copy">&copy; Recode Pro</p>
    </footer>
    <script src="./js/script.js"></script>
</body>

</html>