import mysql from "mysql2";

const ENV = process.env;

const connection = mysql.createConnection({
    host: ENV.MYSQL_HOST,
    database: ENV.MYSQL_DATABASE,
    user: ENV.MYSQL_USER,
    password: ENV.MYSQL_PWD
});

export { connection };