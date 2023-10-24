CREATE DATABASE vinyldays;

USE vinyldays;

/* USER TABLE */
CREATE TABLE tb_users(
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(75) NOT NULL, 
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL
);

/* DISCO TABLE */
CREATE TABLE tb_albums(
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  artist VARCHAR(60) NOT NULL,
<<<<<<< HEAD
  category VARCHAR(60) NOT NULL,
=======
>>>>>>> b77c73a691b816656574c0f9cc3fb18e6e338fcf
  price DOUBLE NOT NULL,
  oldPrice DOUBLE,
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NOT NULL
);
