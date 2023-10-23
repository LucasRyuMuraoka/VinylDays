import { connection as Connection } from "../config/database/connection.database.js";

let query = "";
let fields = [
    "tb_albums.id",
    "tb_albums.name",
    "tb_albums.artist",
    "tb_albums.category",
    "tb_albums.price",
    "tb_albums.oldPrice",
    "tb_albums.createdAt",
    "tb_albums.updatedAt",
];

export class AlbumsRepository {

    async findAll() {
        query = `SELECT ${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]}, ${fields[4]}, ${fields[5]}, ${fields[6]}, ${fields[7]} FROM tb_albums`;
        const [queryRows] = await Connection.promise().query(query);
        return queryRows;
    }

    async findById(id) {
        query = `SELECT ${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]}, ${fields[4]}, ${fields[5]}, ${fields[6]}, ${fields[7]} FROM tb_albums WHERE ${fields[0]} = ?`;
        const [queryRows] = await Connection.promise().execute(query, [id]);
        return queryRows[0];
    }

    async findByName() {
			return await this.findAll();
		}
		
		async findByArtist() {
			return await this.findAll();
		}

		async findByCategory() {
				return await this.findAll();
		}

    async create(album) {
        query = `INSERT INTO tb_albums (${fields[0]}, ${fields[1]}, ${fields[2]}, ${fields[3]}, ${fields[4]}, ${fields[5]}, ${fields[6]}, ${fields[7]}) VALUES (UUID(), ?, ?, ?, ?, ? , NOW(), NOW())`;
        await Connection.promise().execute(query, [album.name, album.artist, album.category, album.price, album.oldPrice]);
    }

    async update(album) {
        query = `UPDATE tb_albums SET ${fields[1]} = ?, ${fields[2]} = ?, ${fields[3]} = ?, ${fields[4]} = ?, ${fields[5]} = ?, ${fields[7]} = NOW() WHERE ${fields[0]} = ?`;
        await Connection.promise().execute(query, [album.name, album.artist, album.category, album.price, album.oldPrice, album.id]);
    }

    async delete(id) {
        query = `DELETE FROM tb_albums WHERE ${fields[0]} = ?`;
        await Connection.promise().execute(query, [id]);    
    }

}
