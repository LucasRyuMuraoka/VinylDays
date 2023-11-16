import { AppErrors } from "../AppErrors.error.js";

export class LoginNotAccepted extends AppErrors {
  
  constructor(message) {
    super(message, "LoginNotAccepted", 401);
  }

}
