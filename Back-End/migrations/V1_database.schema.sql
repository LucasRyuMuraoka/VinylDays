/* USER TABLE */
create table tb_users(
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(75) NOT NULL, 
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL
);