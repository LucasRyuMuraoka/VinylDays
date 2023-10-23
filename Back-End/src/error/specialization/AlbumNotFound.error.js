import { AppErrors } from "../AppErrors.error.js";

export class AlbumNotFound extends AppErrors {

	constructor(message) {
    super(message, "AlbumNotFound", 404);
  }

}
