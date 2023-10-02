CREATE DATABASE products_app;
USE products_app;
CREATE TABLE categories(
category_id int AUTO_INCREMENT PRIMARY KEY,
brand VARCHAR (40)
);

CREATE TABLE products(
products_id int AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (50) NOT NULL,
product_description text (300) NOT NULL,
price int NOT NULL,
category_id int,
createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

INSERT INTO categories(brand)
VALUES ("ADIDAS"),
("PUMA"),
("NIKE");