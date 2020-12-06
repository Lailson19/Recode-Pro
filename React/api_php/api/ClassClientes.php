<?php
require "ClassConexao.php";

class ClassClientes extends ClassConexao
{
    // Exibição dos dados da tabela PRODUTO em um JSON
    public function exibeClientes()
    {
        $pegaDados = $this->ConectaDB()->prepare("select idcliente, nomecliente, emailcliente from cliente");
        $pegaDados->execute();

        $clientes = $pegaDados->fetchAll(PDO::FETCH_ASSOC);

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($clientes);
    }
}
