import { connection as Connection } from "../config/database/connection.database.js";

let query = "";
let fields = [
    "tb_users.id",
    "tb_users.name",
    "tb_users.email",
    "tb_users.password",
    "tb_users.createdAt",
    "tb_users.updatedAt",
];

export class UsersRepository {

    async findAll() {
        query = `SELECT ${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]}, ${fields[4]}, ${fields[5]} FROM tb_users`;
        const [queryRows] = await Connection.promise().query(query);
        return queryRows;
    }

    async findById(id) {
        query = `SELECT ${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]}, ${fields[4]}, ${fields[5]} FROM tb_users WHERE ${fields[0]} = ?`;
        const [queryRows] = await Connection.promise().execute(query, [id]);
        return queryRows[0];
    }

    async findByName() {
        return await this.findAll();
    }

    async delete(id) {
        query = `DELETE FROM tb_users WHERE ${fields[0]} = ?`;
        await Connection.promise().execute(query, [id]);    
    }
}