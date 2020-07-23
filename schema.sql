DROP DATABASE IF EXISTS shortly_express;
CREATE DATABASE shortly_express;
USE shortly_express;

CREATE TABLE `urls` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `url` varchar(255) not NULL,
  `baseUrl` varchar(255) not NULL,
  `code` varchar(255) not NULL,
  `title` varchar(255) not NULL,
  `visits` int not NULL DEFAULT 0,
  `createdAt` datetime not NULL DEFAULT CURRENT_TIMESTAMP
);