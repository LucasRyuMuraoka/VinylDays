import { AppErrors } from "../AppErrors.error.js";

export class InvalidFields extends AppErrors {

  constructor(message) {
    super(message, "InvalidFields", 422);
  }

}