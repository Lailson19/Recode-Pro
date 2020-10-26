<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Produtos - Full Stach Eletro</title>
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
        <h2 class="mag">Produtos</h2>
        <hr>
    </header>
    <aside>
        <h3 class="mag">Categoria:</h3>
        <ul class="mag">
            <li onclick="exTudo()" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Todas (12)</li>
            <li onclick="exCategoria('geladeira')" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Geladeiras (3)</li>
            <li onclick="exCategoria('fogao')" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Fogões (2)</li>
            <li onclick="exCategoria('microondas')" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Microondas (3)</li>
            <li onclick="exCategoria('lavadoura')" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Lavadouras (2)</li>
            <li onclick="exCategoria('lavalouca')" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Lava-louças (2)</li>
        </ul>
    </aside>
    <section>
        <div class="container">
            <div class="produtos" id="geladeira" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/geladeira2.jpeg" alt="Geladeira Brastemp Ínox Side Inverse"><br>
                <h4>Geladeira Frost Free Brastemp 540L</h4>
                <hr>
                <p class="valorAntes">R$ 6.389,00</p>
                <p class="valorDesc">R$ 5.019,00</p>
            </div>
            <div class="produtos" id="geladeira" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/geladeira.jpeg" alt="Geladeira Brastemp Branca"><br>
                <h4>Geladeira Frost Free Brastemp Branca 375L</h4>
                <hr>
                <p class="valorAntes">R$ 2.068,60</p>
                <p class="valorDesc">R$ 1.910,90</p>
            </div>
            <div class="produtos" id="geladeira" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/geladeira3.jpeg" alt="Geladeira Consul Prata"><br>
                <h4>Geladeira Frost Free Consul Prata 340 litros</h4>
                <hr>
                <p class="valorAntes">R$ 2.100,00</p>
                <p class="valorDesc">R$ 2.069,00</p>
            </div>
            <div class="produtos" id="fogao" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/fogao2.jpeg" alt="Fogão Consul Ínox"><br>
                <h4>Fogão 4 Bocas Consul ínox com Mesa de Vidro</h4>
                <hr>
                <p class="valorAntes">R$ 1.200,00</p>
                <p class="valorDesc">R$ 1.129,00</p>
            </div>
        </div>
<!-- Primaira linha ------------------------------------- -->
        <div class="container">
            <div class="produtos" id="fogao" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/fogão.jpeg" alt="Fogão Atlas Monaco"><br>
                <h4>Fogão de Piso 4 Bocas Atlas Monaco </h4>
                <hr>
                <p class="valorAntes">R$ 600,00</p>
                <p class="valorDesc">R$ 519,70</p>
            </div>
            <div class="produtos" id="microondas" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/microondas3.jpeg" alt="Microondas Consul Ínox 32 Litros"><br>
                <h4>Micro-ondas Philco Espelhado 25 Litros 220v</h4>
                <hr>
                <p class="valorAntes">R$ 580,00</p>
                <p class="valorDesc">R$ 408,88</p>
            </div>
            <div class="produtos" id="microondas" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/microondas2.jpeg" alt="Microondas Espelhado 25 litros"><br>
                <h4>Micro-ondas Philco Espelhado 25 Litros 220v</h4>
                <hr>
                <p class="valorAntes">R$ 508,70</p>
                <p class="valorDesc">R$ 464,52</p>
            </div>
            <div class="produtos" id="microondas" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/microondas.jpeg" alt="Microondas Electrolux 20 litros"><br>
                <h4>Micro-ondas Electrolux Brano 20 Litros</h4>
                <hr>
                <p class="valorAntes">R$ 450,00</p>
                <p class="valorDesc">R$ 436,05</p>
            </div>
        </div>
        <!-- Primaira linha ------------------------------- -->
        <div class="container">
            <div class="produtos" id="lavalouca" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/lavalouca2.jpeg" alt="Lava-Louça Electrolux ínox"><br>
                <h4>Lava-Louças Electrolux Ínox, Painel Blue Touch</h4>
                <hr>
                <p class="valorAntes">R$ 3.500,00</p>
                <p class="valorDesc">R$ 2.799,90</p>
            </div>
            <div class="produtos" id="lavalouca" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/lavalouca.jpeg" alt="Lava-Louça Branca"><br>
                <h4>Lava-Louças Compacta Branca 127v Brastemp</h4>
                <hr>
                <p class="valorAntes">R$ 1.970,50</p>
                <p class="valorDesc">R$ 1.730,61</p>
            </div>
            <div class="produtos" id="lavadoura" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/lavadoura.jpeg" alt="Lavadoura Brastemp Branca 11 Kg"><br>
                <h4>Lavadoura de Roupas Brastemp 11Kg Branca</h4>
                <hr>
                <p class="valorAntes">R$ 1.699,00</p>
                <p class="valorDesc">R$ 1.214,10</p>
            </div>
            <div class="produtos" id="lavadoura" onmouseover="upScale(this)" onmouseout="downScale(this)">
                <img src="./img/lavadoura2.jpeg" alt="Lavadoura Roupas Philco 12 Kg"><br>
                <h4>Lavadoura de Roupa Philco Inverse 12 Kg</h4>
                <hr>
                <p class="valorAntes">R$ 2.399,90</p>
                <p class="valorDesc">R$ 2.179,90</p>
            </div>
        </div>
    </section>
    <footer>
        <p id="form_pag">Formas de pagamento</p>
        <img src="./img/cartoes.png" width="300" alt="Formas de pagamento">
        <p id="copy">&copy; Recode Pro</p>
    </footer>
    <script src="./js/script.js"></script>
</body>
</html>