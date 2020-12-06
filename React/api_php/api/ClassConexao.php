<?php

abstract class ClassConexao
{
    protected function ConectaDB()
    {
        try {
            $Conn = new PDO("mysql:host=localhost;dbname=fseletro","root","");
            return $Conn;
        } catch (PDOException $Erro) {
            return $Erro->getMessage();
        }
    }
}
