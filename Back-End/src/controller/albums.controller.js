import { AppErrors } from "../error/AppErrors.error.js";
import { AlbumsService } from "../service/albums.service.js";

/*
	Padrão de HTTP STATUS:

	Métodos do tipo GET: 200,
	Métodos do tipo POST: 201,
	Métodos do tipo PUT e Delete: 204
*/

export class AlbumsController {

	albumsService = new AlbumsService();

  findAll(request, response) {
		this.albumsService.findAll().then(data => {
      response.status(200).json(data);
    }).catch(error => {
      if(error instanceof AppErrors)
				response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
			else
				console.log(error);
		});
  }

  findById(request, response) {
		this.albumsService.findById(request.params.id).then(data => {
      response.status(200).json(data);
    }).catch(error => {
      if(error instanceof AppErrors)
				response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
			else
				console.log(error);
		});
  }

  findByName(request, response) {
		this.albumsService.findByName(request.params.name).then(data => {
      response.status(200).json(data);
    }).catch(error => {
      if(error instanceof AppErrors)
				response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
			else
				console.log(error);
		});
  }

  findByArtist(request, response) {
		this.albumsService.findByArtist(request.params.artist).then(data => {
      response.status(200).json(data);
    }).catch(error => {
      if(error instanceof AppErrors)
				response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
			else
				console.log(error);
		});
  }

  findByCategory(request, response) {
		this.albumsService.findByCategory(request.params.category).then(data => {
      response.status(200).json(data);
    }).catch(error => {
      if(error instanceof AppErrors)
				response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
			else
				console.log(error);
		});
  }

  create(request, response) {

  }

  update(request, response) {
    
  }

  delete(request, response) {
    this.albumsService.delete(request.params.id).then(() => {
      response.status(204).json();
    }).catch((error) => {
      if(error instanceof AppErrors)
        response.status(error.status).json({ name: error.name, message: error.message, date: error.date, statusCode: error.status });
      else
        console.log(error);
      });
  }
}
