// Dependências
import express from  'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();
server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})

// Consulta todos os produtos
server.get("/produtos", (request, response) => {
    connection.query('SELECT descricao, preco, precofinal, imagem, nomecategoria FROM produto JOIN categoria ON produto.codcategoria = categoria.codcategoria', (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.json(result)
        }
    })
})

// Consulta produtos pelo ID
server.get("/produtos/:id", (request, response) => {
    const { id } = request.params;
    connection.query(`SELECT descricao, preco, precofinal, imagem, nomecategoria FROM produto JOIN categoria ON produto.codcategoria = categoria.codcategoria WHERE idproduto = ('${id}')`, (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.json(result)
        }
    })
})

// Consulta todas as lojas
server.get("/lojas", (request, response) => {
    connection.query('SELECT cidade, logradouro, compbairro, phone FROM lojas', (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.json(result)
        }
    })
})

// Consulta todos os clientes
server.get("/clientes", (request, response) => {
    connection.query('SELECT idcliente, nomecliente, emailcliente FROM cliente', (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.json(result)
        }
    })
})

server.listen(3333);