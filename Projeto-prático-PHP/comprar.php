<?php include_once('conect.php');

$produto = $_GET['id'];

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Produtos - Full Stach Eletro</title>
    <link rel="stylesheet" href="./css/menu.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/compra.css">
</head>

<body>
    <header>
        <!-- Menu -->
        <?php include_once("menu.php") ?>
        <!-- Fim do Menu -->
        <h2 class="mag">Compra</h2>
        <hr>
    </header>
    <div class="container">
        <main>
            <section>
                <?php
                $sql = "select * from produto where idproduto = '$produto';";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                ?>
                        <img src="<?php echo $row['imagem']; ?>" alt="<?php echo $row['descricao']; ?>">
                        <h4><?php echo $row['descricao']; ?></h4>
                        <p class="valorcheio">R$ <?php echo $row['preco']; ?></p>
                        <p class="valor">R$ <?php echo $row['precofinal']; ?></p>
                <?php
                    }
                } ?>

            </section>
            <section class="pagamento">
                <form action="processo_comprar.php" method="POST">
                    <h3>Confirmar compra</h3>
                    <input type="hidden" name="idproduto" value="<?php echo $produto; ?>">
                    <label for="qnt">Qnt:</label>
                    <input class="impNome" type="number" id="qnt" name="qnt" min="1" max="10">
                    <input class="impBtn" type="submit" value="Enviar">
                </form>
                <p>* Para fazer o pedido, você precisa estar logado.</p>
            </section>
        </main>
    </div>

    <!-- Footer -->
    <?php include_once("footer.html"); ?>
    <!-- Fim Footer -->
</body>

</html>