DROP DATABASE IF EXISTS amazon_db;
CREATE DATABASE amazon_db;
USE amazon_db;

-- Create new table
CREATE TABLE items (
item_id INT NOT NULL AUTO_INCREMENT,
product VARCHAR(100) NULL,
department VARCHAR(60) NULL,
price DECIMAL(10,2) NULL,
inStock INT NULL,
  PRIMARY KEY (item_id)
);
