-- Write your Schema Here --
DROP DATABASE IF EXISTS my_database;
CREATE DATABASE my_database;

USE my_database;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE customer_order (
    id INT,
    customer_id INT,
    order_details TEXT NOT NULL,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);
