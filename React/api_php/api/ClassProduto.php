<?php
require "ClassConexao.php";

class ClassProduto extends ClassConexao
{
    // SELECT descricao, preco, precofinal, imagem, nomecategoria FROM produto left join categoria on produto.idproduto = categoria.codcategoria

    // Exibição dos dados da tabela PRODUTO em um JSON
    public function exibeProdutos()
    {
        $pegaDados = $this->ConectaDB()->prepare("select descricao, preco, precofinal, imagem, nomecategoria from produto join categoria on produto.codcategoria = categoria.codcategoria");
        $pegaDados->execute();

        $produtos = $pegaDados->fetchAll(PDO::FETCH_ASSOC);

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($produtos);
    }
}
