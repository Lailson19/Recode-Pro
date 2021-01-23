<?php include_once("conect.php") ?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Nossas lojas - Full Stack Eletro</title>
    <link rel="stylesheet" href="./css/menu.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/loja.css">
</head>

<body>
    <div class="container">
        <header>
            <!-- Menu -->
            <?php include_once("menu.php") ?>
            <!-- Fim do Menu -->
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
    </div>
    <!-- Footer -->
    <?php include_once("footer.html"); ?>
    <!-- Fim Footer -->
    <script src="./js/script.js"></script>
</body>

</html>