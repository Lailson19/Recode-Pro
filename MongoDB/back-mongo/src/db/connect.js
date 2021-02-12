const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost/produtos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conectado com o banco 'Full Stack Eletro'");
    })
    .catch((error) => {
      console.log(`Erro ao tentar a conexão ${error}`);
    });
}

module.exports = connect();