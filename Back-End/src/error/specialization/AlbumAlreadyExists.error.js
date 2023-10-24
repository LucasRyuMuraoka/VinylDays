import { AppErrors } from "../AppErrors.error.js";

export class AlbumAlreadyExists extends AppErrors {
  
  constructor(message) {
    super(message, "AlbumAlreadyExists", 409);
  }

}
