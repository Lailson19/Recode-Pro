-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Nov-2020 às 17:46
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--
CREATE DATABASE IF NOT EXISTS `fseletro` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fseletro`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `idcliente` int(11) NOT NULL,
  `nomecliente` varchar(50) NOT NULL,
  `emailcliente` varchar(45) NOT NULL,
  `senhacliente` varchar(100) NOT NULL,
  `datacadastro` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`idcliente`, `nomecliente`, `emailcliente`, `senhacliente`, `datacadastro`) VALUES
(2, 'Lailson Andesson Dionisio dos Santos', 'contatolailsonandesson@gmail.com', '25d55ad283aa400af464c76d713c07ad', '2020-11-04 11:49:37.003710'),
(3, 'Lailson Andesson Dionisio dos Santos', 'lailson1991@gmail.com', '25f9e794323b453885f5181f1b624d0b', '2020-11-04 11:51:16.803748');

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagem`
--

DROP TABLE IF EXISTS `mensagem`;
CREATE TABLE `mensagem` (
  `id` int(20) NOT NULL,
  `idcliente` int(11) NOT NULL,
  `emailretorno` varchar(45) NOT NULL,
  `assinado` varchar(45) NOT NULL,
  `msg` varchar(1000) NOT NULL,
  `datamsg` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `mensagem`
--

INSERT INTO `mensagem` (`id`, `idcliente`, `emailretorno`, `assinado`, `msg`, `datamsg`) VALUES
(14, 3, 'lailson1991@gmail.com', 'Lailson', 'Esse é um teste\r\n', '2020-11-04 11:53:24.875264');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE `pedidos` (
  `idpedido` int(11) NOT NULL,
  `idcliente` int(11) NOT NULL,
  `idproduto` int(11) NOT NULL,
  `qntpedido` int(11) NOT NULL,
  `data` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedido`, `idcliente`, `idproduto`, `qntpedido`, `data`) VALUES
(1, 3, 11, 1, '2020-11-04 16:35:35.236146'),
(2, 3, 11, 1, '2020-11-04 16:35:46.187463'),
(3, 3, 2, 1, '2020-11-04 16:36:18.103500');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE `produto` (
  `idproduto` int(20) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `precofinal` decimal(8,2) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `datainclusao` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `qntproduto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`, `datainclusao`, `qntproduto`) VALUES
(1, 'geladeira', 'Geladeira Frost Free Brastemp 480L', '6389.00', '5019.00', './img/geladeira2.png', '2020-11-01 02:47:31.600769', 0),
(2, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375L', '2068.60', '1910.90', './img/geladeira.png', '2020-11-01 02:47:31.600769', 0),
(3, 'geladeira', 'Geladeira Frost Free Consul Prata 340 litrosL', '2100.00', '2069.00', './img/geladeira3.png', '2020-11-01 02:47:31.600769', 0),
(4, 'fogao', 'Fogão 4 Bocas Consul ínox com Mesa de Vidro', '1200.00', '1129.00', './img/fogao2.png', '2020-11-01 02:47:31.600769', 0),
(5, 'fogao', 'Fogão de Piso 4 Bocas Atlas Monaco', '600.00', '519.70', './img/fog%C3%A3o.png', '2020-11-01 02:47:31.600769', 0),
(6, 'microondas', 'Micro-ondas Philco Espelhado 25 Litros 220v', '580.00', '408.88', './img/microondas3.png', '2020-11-01 02:47:31.600769', 0),
(7, 'microondas', 'Micro-ondas Eletrolux Espelhado 25 Litros 220v', '508.70', '464.52', './img/microondas2.png', '2020-11-01 02:47:31.600769', 0),
(8, 'microondas', 'Micro-ondas Electrolux Brano 20 Litros', '450.00', '436.05', './img/microondas.png', '2020-11-01 02:47:31.600769', 0),
(9, 'lavadouras', 'Lavadoura de Roupas Brastemp 11Kg Branca', '1699.00', '1214.10', './img/lavadoura.png', '2020-11-01 02:47:31.600769', 0),
(10, 'lavadouras', 'Lavadoura de Roupa Philco Inverse 12 Kg', '2399.90', '2179.90', './img/lavadoura2.png', '2020-11-01 02:47:31.600769', 0),
(11, 'lavaloucas', 'Lava-Louças Electrolux Ínox, Painel Blue Touch', '3500.00', '2799.90', './img/lavalouca2.png', '2020-11-01 02:47:31.600769', 0),
(12, 'lavaloucas', 'Lava-Louças Compacta Branca 127v Brastemp', '1970.50', '1730.61', './img/lavalouca.png', '2020-11-01 02:47:31.600769', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idcliente`),
  ADD UNIQUE KEY `emailcliente_UNIQUE` (`emailcliente`);

--
-- Índices para tabela `mensagem`
--
ALTER TABLE `mensagem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_mensagem_idx` (`idcliente`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedido`),
  ADD KEY `pedido_cliente_idx` (`idcliente`),
  ADD KEY `pedido_produto_idx` (`idproduto`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem_UNIQUE` (`imagem`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idcliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `mensagem`
--
ALTER TABLE `mensagem`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `mensagem`
--
ALTER TABLE `mensagem`
  ADD CONSTRAINT `cliente_mensagem` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedido_cliente` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_produto` FOREIGN KEY (`idproduto`) REFERENCES `produto` (`idproduto`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
