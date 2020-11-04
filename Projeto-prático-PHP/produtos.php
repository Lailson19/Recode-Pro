<?php include_once("conect.php") ?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Produtos - Full Stach Eletro</title>
    <link rel="stylesheet" href="./css/menu.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/produto.css">
</head>

<body>
    <div class="container">
        <header>
            <!-- Menu -->
            <?php include_once("menu.php") ?>
            <!-- Fim do Menu -->
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
                <li onclick="exCategoria('lavadouras')" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Lavadouras (2)</li>
                <li onclick="exCategoria('lavaloucas')" onmouseover="upScaleMenu(this)" onmouseout="downScaleMenu(this)">Lava-louças (2)</li>
            </ul>
        </aside>
        <section>
            <div class="container">
                <?php
                $sql = "select * from produto;";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                ?>
                    
                    <div class="produtos" id="<?php echo $row['categoria']; ?>" onmouseover="upScale(this)" onmouseout="downScale(this)">
                    <a href="comprar.php?id=<?php echo $row['idproduto'];?>"><img src="<?php echo $row['imagem']; ?>" alt="<?php echo $row['descricao']; ?>"> </a><br>
                    <h4><?php echo $row['descricao']; ?></h4>
                    <hr>
                    <p class="valorAntes">R$ <?php echo $row['preco']; ?></p>
                    <p class="valorDesc">R$ <?php echo $row['precofinal']; ?></p>
                    </div>
                   
                <?php
                    }
                }
                ?>
            </div>
        </section>

        <!-- Footer -->
        <?php include_once("footer.html"); ?>
        <!-- Fim Footer -->
    </div>
    <script src="./js/script.js"></script>
</body>

</html>