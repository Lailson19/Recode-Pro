create database comercio;
use comercio;

create table produtos(
	id_produto int not null primary key auto_increment,
    nome_produto varchar(30) not null,
    descricao_produto varchar(50) not null,
    preco_produto decimal(8,2) not null,
    img_produto varchar(250)
);

create table pedidos(
	id_pedidos int not null primary key auto_increment,
    nome_cliente varchar(40) not null,
    endereco varchar(80) not null,
    telefone varchar(15) not null,
    nome_produto varchar(30) not null,
    valor_unitario decimal(8,2) not null,
    quantidade int not null,
    valor_total decimal(8,2) not null
);