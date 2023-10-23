import { DateFormat } from "../util/dateFormat.format.js";

const dateFormat = new DateFormat();

export class AlbumsDTO {
  format(album) {
    return {
      id: album.id,
      name: album.name, 
      artist: album.artist,
      category: album.category,
      price: album.price, 
      oldPrice: album.oldPrice,
      createdAt: dateFormat.formatTimestamp(album.createdAt),
      updatedAt: dateFormat.formatTimestamp(album.updatedAt)
    }
  }

  toJson(object) {
    return JSON.parse(JSON.stringify(object));
	}
}

