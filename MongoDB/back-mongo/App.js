const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// Config. JSON.
app.use(express.json());

// Models.
require("./src/models/Produto");
const Produto = mongoose.model("produtos");

// Conexão DB.
require("./src/db/connect");

// Select de Usuario.
app.get("/produtos", async (req, res) => {
  const produtosResponse = await Produto.find();
  const produtosJson = await produtosResponse;

  return res.json(produtosJson);
});

// Cadastro em Produto.
app.post("/produtos", async (req, res) => {
  
    const novoProduto = new Produto({
      descricao: req.body.descricao,
      categoria: req.body.categoria,
      preco: req.body.preco,
      precofinal: req.body.precofinal,
      imagem: req.body.imagem
    });

    novoProduto.save();
    // Mensagem de feedback.
    res.json({
      message: "Cadastro concluido com sucesso",
      produto: novoProduto
    });

  // bcrypt.genSalt(10, (error, salt) => {
  //   // Gerando hash com o salt.
  //   bcrypt.hash(novoProduto.senha, salt, (error, hash) => {
  //     if (error) {
  //       res.json({ message: "Erro ao cadastrar o Usuário" });
  //     } else {
  //       // Encriptando senha.
  //       novoProduto.senha = hash;
  //       // Salvando informações no BD.
  //       novoProduto.save();
  //       // Mensagem de feedback.
  //       res.json({
  //         message: "Cadastro concluido com sucesso",
  //         produto: novoProduto,
  //       });
  //     }
  //   });
  // });

});

// Alterar dado em Produto.
app.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const produto = await Produto.findOne({ _id: id });

  produto.descricao = req.body.descricao,
  produto.categoria = req.body.categoria,
  produto.preco = req.body.preco,
  produto.precofinal = req.body.precofinal,
  produto.imagem = req.body.imagem

  produto.save();
  res.json({ message: "Produto alterado com sucesso!", produto: produto });
});

// Deletar dado em Produto.
app.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const produto = await Produto.findOneAndDelete({ _id: id });

  res.json({ message: "Usuário deletado com sucesso!", produto: produto });
});

// Servidor.
app.listen(3333);
