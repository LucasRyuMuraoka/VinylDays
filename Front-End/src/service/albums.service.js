import { createServer } from "miragejs";
import { vinylBackEnd } from "./axios.api";
import { server } from "./server.api";

export class AlbumsService {
  findAll() {
    return new Promise((resolve, reject) => {
      const currentState = server.shutdown();
      vinylBackEnd.get("/albums").then(data => resolve(data.data)).catch(error => reject(error.response.data.message));

      createServer(currentState);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      const currentState = server.shutdown();
      vinylBackEnd.get(`/albums/${id}`).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));

      createServer(currentState);
    });
  }

  findByName(name) {
    return new Promise((resolve, reject) => {
      const currentState = server.shutdown();
      vinylBackEnd.get(`/albums/name-like/${name}`).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));

      createServer(currentState);
    });
  }

  findByArtist(artist) {
    return new Promise((resolve, reject) => {
      const currentState = server.shutdown();
      vinylBackEnd.get(`/albums/artist/${artist}`).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));

      createServer(currentState);
    });
  }

  findByCategory(category) {
    return new Promise((resolve, reject) => {
      const currentState = server.shutdown();
      vinylBackEnd.get(`/albums/category/${category}`).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));

      createServer(currentState);
    });
  }

  create(newAlbum) {
    return new Promise((resolve, reject) => {
			const currentState = server.shutdown();
			vinylBackEnd.post("/albums", newAlbum).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));
			
			createServer(currentState);
		});
  }

  update(newAlbum, id) {
    return new Promise((resolve, reject) => {
			const currentState = server.shutdown();
			vinylBackEnd.put(`/albums/${id}`, newAlbum).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));
			
			createServer(currentState);
		});
  }

  delete(id) {
    return new Promise((resolve, reject) => {
			const currentState = server.shutdown();
			vinylBackEnd.delete(`/albums/${id}`).then(data => resolve(data.data)).catch(error => reject(error.response.data.message));

			createServer(currentState);
		});
  }
}
