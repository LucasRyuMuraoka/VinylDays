import mysql from "mysql2/promise";
import "dotenv/config";

import { Base64 } from "../../util/base64.encrypt.js";

const base64 = new Base64();

describe("Users repository \"switch class\"", () => {
    let connection;
    let query;
    const ENV = {
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
    };

    let fields = [
        "tb_users.id",
        "tb_users.name",
        "tb_users.email",
        "tb_users.password",
        "tb_users.createdAt",
        "tb_users.updatedAt",
    ];
    
    beforeAll(async () => {
        connection = await mysql.createConnection({
            host: ENV.host,
            database: ENV.database,
            user: ENV.user,
            password: ENV.password
        });
    });

    afterAll(async () => {
        await connection.end();
    });

    test("Find by id", async () => {
        query = `SELECT ${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]}, ${fields[4]}, ${fields[5]} FROM tb_users WHERE ${fields[0]} = ?`;
        const [queryRows, queryFields] = await connection.execute(query, ["544fde26-644a-11ee-b88f-ec63d7ea86d4"]);
        const name = queryRows[0].name;

        expect(name).toBe("Matheus Ferreira Santos");

    });

    test("Create a new User", async () => {
        query = `INSERT INTO tb_users (id, name, email, password, createdAt, updatedAt) VALUES (UUID(), ?, ?, ?, now(), now())`;
        
        const req = {
            body: {
                name: "Usuário Teste",
                email: base64.encode("usuario@teste.com"),
                password: base64.encode("usuarioTeste123#")
            }
        }

        //const [queryRows, queryFields] = await connection.execute(query, [req.body.name, req.body.email, req.body.password]);
    });

    test("Delete by id", async () => {
        query = "DELETE FROM tb_users WHERE tb_users.email = ?";
        const req = {
            body: {
                email: base64.encode("usuario@teste.com"),
            }
        }

        const [queryRows, queryFields] = await connection.execute(query, [req.body.email]);
        console.log(queryRows);
    });

});