const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Modelo do Schema do banco de dados MongoDB
// const Usuario = new Schema({
//     nome:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     senha:{
//         type: String,
//         required: true
//     }
// })

// mongoose.model('usuarios', Usuario)

const Produto = new Schema({
    descricao:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    preco:{
        type: String,
        required: true
    },
    precofinal:{
        type: String,
        required: true
    },
    imagem:{
        type: String,
        required: true
    }
})

mongoose.model('produtos', Produto)