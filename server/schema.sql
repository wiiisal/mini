DROP DATABASE IF EXISTS minilist;
CREATE DATABASE IF NOT EXISTS minilist;
USE minilist;
CREATE TABLE IF NOT EXISTS products(
    ProductID int NOT NULL AUTO_INCREMENT,
    productName varchar(100) NOT NULL ,
    productDescription varchar(255) NOT NULL,
    productPrice varchar(50) NOT NULL,
    productRaiting varchar(50) NOT NULL,
    productImage varchar(255) NOT NULL,
    PRIMARY KEY(ProductID)
);

CREATE TABLE IF NOT EXISTS Orders(
    OrderID int NOT NULL AUTO_INCREMENT,
    totalprice varchar(100) NOT NULL ,
    ProductID int,
    PRIMARY KEY(OrderID),
    FOREIGN KEY (ProductID) REFERENCES products(ProductID)
);