import { AppErrors } from "../AppErrors.error.js";

export class UserAlreadyExists extends AppErrors {
  
  constructor(message) {
    super(message, "UserAlreadyExists", 409);
  }

}