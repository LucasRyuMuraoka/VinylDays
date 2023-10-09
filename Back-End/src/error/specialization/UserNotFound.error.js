import { AppErrors } from "../AppErrors.error.js";

export class UserNotFound extends AppErrors {
    
    constructor(message) {
        super(message, "UserNotFound", 404);
    }
    
}