-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Dez-2020 às 16:19
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
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `codcategoria` int(4) NOT NULL,
  `nomecategoria` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`codcategoria`, `nomecategoria`) VALUES
(1, 'Geladeira'),
(2, 'Fogao'),
(3, 'Microondas'),
(4, 'Lavadoura'),
(5, 'Lavalouca');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

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
(2, 'Lailson', 'contatolailsonandesson@gmail.com', '25d55ad283aa400af464c76d713c07ad', '2020-11-26 22:41:20.867673'),
(3, 'Lailson Andesson', 'lailson1991@gmail.com', '25f9e794323b453885f5181f1b624d0b', '2020-11-26 22:41:21.168713'),
(4, 'eu', 'eu@gmail.com', '25d55ad283aa400af464c76d713c07ad', '2020-12-05 04:22:15.714811');

-- --------------------------------------------------------

--
-- Estrutura da tabela `lojas`
--

CREATE TABLE `lojas` (
  `idlojas` int(11) NOT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `logradouro` varchar(45) DEFAULT NULL,
  `compbairro` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `lojas`
--

INSERT INTO `lojas` (`idlojas`, `cidade`, `logradouro`, `compbairro`, `phone`) VALUES
(1, 'Rio de Janeiro', 'Avenida Presidente Fragas, 5000', '10° andar - Centro', '(21) 3333-3333'),
(2, 'São Paulo', 'Avenida Nove de Julho, 2571', '3° andar - Jardins', '(11) 4444-4444'),
(3, 'Santa Catariana', 'Rua Major Ávila, 370', 'Vila Mariana', '(47) 5555-5555');

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagem`
--

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
(14, 3, 'lailson1991@gmail.com', 'Lailson', 'Esse é um teste\r\n', '2020-11-04 11:53:24.875264'),
(16, 3, 'lailson1991@gmail.com', 'dgdgdfgdfg', 'dfsgsdfgfdsg', '2020-11-05 21:01:53.950373');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

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
(3, 3, 2, 1, '2020-11-04 16:36:18.103500'),
(4, 3, 1, 8, '2020-11-05 22:10:38.728227'),
(5, 3, 2, 1, '2020-11-05 23:07:47.890306'),
(6, 4, 2, 1, '2020-12-05 04:32:15.889063'),
(7, 4, 1, 1, '2020-12-05 04:33:13.996148');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(20) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `codcategoria` int(4) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `precofinal` decimal(8,2) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `datainclusao` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `qntproduto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `descricao`, `codcategoria`, `preco`, `precofinal`, `imagem`, `datainclusao`, `qntproduto`) VALUES
(1, 'Geladeira Frost Free Brastemp', 1, '6389.00', '5019.00', 'geladeira2.png', '2020-12-04 07:30:33.157674', 5),
(2, 'Geladeira Frost Free Brastemp Branca', 1, '2068.60', '1910.90', 'geladeira.png', '2020-12-04 07:30:33.174766', 5),
(3, 'Geladeira Frost Free Consul Prata', 1, '2100.00', '2069.00', 'geladeira3.png', '2020-12-04 07:30:33.175236', 5),
(4, 'Fogão 4 Bocas Consul ínox c/ Vidro', 2, '1200.00', '1129.00', 'fogao2.png', '2020-12-06 06:00:42.733799', 5),
(5, 'Fogão de Piso 4 Bocas Atlas Monaco', 2, '600.00', '519.70', 'fogao.png', '2020-11-26 22:14:17.475777', 5),
(6, 'Micro-ondas Philco Espelhado', 3, '580.00', '408.88', 'microondas3.png', '2020-12-04 07:31:41.838587', 5),
(7, 'Micro-ondas Eletrolux Espelhado', 3, '508.70', '464.52', 'microondas2.png', '2020-12-04 07:31:41.839370', 5),
(8, 'Micro-ondas Electrolux Brano ', 3, '450.00', '436.05', 'microondas.png', '2020-12-04 07:32:19.860235', 5),
(9, 'Lavadoura de Roupas Brastemp', 4, '1699.00', '1214.10', 'lavadoura.png', '2020-12-04 07:32:19.861576', 5),
(10, 'Lavadoura de Roupa Philco Inverse', 4, '2399.90', '2179.90', 'lavadoura2.png', '2020-12-04 07:32:19.862901', 5),
(11, 'Lava-Louças Electrolux Ínox', 5, '3500.00', '2799.90', 'lavalouca2.png', '2020-12-04 07:32:19.863576', 5),
(12, 'Lava-Louças Compacta Branca', 5, '1970.50', '1730.61', 'lavalouca.png', '2020-12-04 07:32:19.864041', 5);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`codcategoria`);

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idcliente`),
  ADD UNIQUE KEY `emailcliente_UNIQUE` (`emailcliente`);

--
-- Índices para tabela `lojas`
--
ALTER TABLE `lojas`
  ADD PRIMARY KEY (`idlojas`);

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
  ADD UNIQUE KEY `imagem_UNIQUE` (`imagem`),
  ADD KEY `foreignkey_categoria_idx` (`codcategoria`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `codcategoria` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idcliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `lojas`
--
ALTER TABLE `lojas`
  MODIFY `idlojas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `mensagem`
--
ALTER TABLE `mensagem`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `produto_categoria` FOREIGN KEY (`codcategoria`) REFERENCES `categoria` (`codcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
