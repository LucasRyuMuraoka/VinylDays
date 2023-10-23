import { AlbumsRepository } from "../repository/albums.repository.js";
import { AlbumNotFound } from "../error/specialization/AlbumNotFound.error.js";
import { AlbumsDTO } from "../DTO/albums.dto.js";

const albumsDTO = new AlbumsDTO();
const albumsRepository = new AlbumsRepository();

export class AlbumsService {
  
	findAll() {
    return new Promise(async (resolve, reject) => {
      const albumList = await albumsRepository.findAll();

			if (!albumList[0])
      	reject(new AlbumNotFound("The method to fetch all albums was invoked but the table album is empty!"));

			const albumListDTO = new Array();

			albumList.forEach(album => {
				albumListDTO.push(albumsDTO.toJson(albumsDTO.format(album)));
			});

      resolve(albumListDTO);
		});
  }

	findById(id) {
		return new Promise(async (resolve, reject) => {
			const album = await albumsRepository.findById(id);

			if (!album) 
				reject(new AlbumNotFound("The method to search for a album was invoked but it was not found in the database!"));
			else {
				const albumDTO = albumsDTO.toJson(albumsDTO.format(album));
				resolve(albumDTO);
			}
		});
	}

	findByName(name) {
		return new Promise(async (resolve, reject) => {
			const albumList = await albumsRepository.findByName();
			const albumsWithNameLike = albumList.filter((album) => String(album.name).toLowerCase().includes(String(name).toLowerCase()));
			
			if (!albumsWithNameLike[0])
				reject(new AlbumNotFound("The method to search for a album was invoked but it was not found in the database!"));  
			else {
				const albumListDTO = new Array();
				
				albumsWithNameLike.forEach(album => {
					albumListDTO.push(albumsDTO.toJson(albumsDTO.format(album)));
				});

				resolve(albumListDTO);
			}
		});
	}

	findByArtist(artist) {
		return new Promise(async (resolve, reject) => {
			const albumList = await albumsRepository.findByArtist();
			const albumsByArtist = albumList.filter((album) => String(album.artist).toLowerCase().includes(String(artist).toLowerCase()));
			
			if (!albumsByArtist[0])
				reject(new AlbumNotFound("The method to search for a album by artist name was invoked but it was not found in the database!"));  
			else {
				const albumListDTO = new Array();
				
				albumsByArtist.forEach(album => {
					albumListDTO.push(albumsDTO.toJson(albumsDTO.format(album)));
				});

				resolve(albumListDTO);
			}
		});
	}

	findByCategory(category) {
		return new Promise(async (resolve, reject) => {
			const albumList = await albumsRepository.findByCategory();
			const albumsByCategory = albumList.filter((album) => String(album.category).toLowerCase().includes(String(category).toLowerCase()));
			
			if (!albumsByCategory[0])
				reject(new AlbumNotFound("The method to search for a album by category name was invoked but it was not found in the database!"));  
			else {
				const albumListDTO = new Array();
				
				albumsByCategory.forEach(album => {
					albumListDTO.push(albumsDTO.toJson(albumsDTO.format(album)));
				});

				resolve(albumListDTO);
			}
		});
	}


	create(newAlbum) {

		if(!newAlbum.oldPrice || newAlbum.oldPrice > newAlbum.price) {
			newAlbum.oldPrice = newAlbum.price;
		}

	}

	update(newAlbum, id) {

	}

	delete(id) {
		return new Promise(async (resolve, reject) => {
			await this.findById(id).then(async () => {
				await albumsRepository.delete(id);	
				resolve();
			}).catch((error) => {
				if(error instanceof AlbumNotFound)
					reject(new AlbumNotFound(error.message));
				else
					console.log(error);
			});
		});
	}
}
