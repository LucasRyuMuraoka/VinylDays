import mysql from "mysql2";

const ENV = process.env;

const connection = mysql.createConnection({
    host: ENV.HOST,
    database: ENV.DATABASE,
    user: ENV.USER,
    password: ENV.PASSWORD
});

export { connection };