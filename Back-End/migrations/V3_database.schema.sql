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
  category VARCHAR(60) NOT NULL,
  URL VARCHAR(255) NOT NULL,
  price DOUBLE(10, 2) NOT NULL,
  oldPrice DOUBLE(10, 2),
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NOT NULL
);

