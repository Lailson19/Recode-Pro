<?php
require "ClassConexao.php";

class ClassLojas extends ClassConexao
{
    // Exibição dos dados da tabela PRODUTO em um JSON
    public function exibeLojas()
    {
        $pegaDados = $this->ConectaDB()->prepare("select cidade, logradouro, compbairro, phone from lojas");
        $pegaDados->execute();

        $lojas = $pegaDados->fetchAll(PDO::FETCH_ASSOC);

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($lojas);
    }
}
