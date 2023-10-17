import { InvalidFields } from "../error/specialization/InvalidFields.error.js";
import { __REGEX__ } from "./users.regex.js";

export class UsersValidations {

  validation(user) {
    return new Promise((resolve, reject) => {
      const messages = [];

      this.nameFieldValidation(user.name, messages);
      this.emailFieldValidation(user.email, messages);
      this.passwordFieldValidation(user.password, messages);
      
      if(messages.length > 0)
        reject(new InvalidFields(messages));
      else
        resolve(user);
    });
  }

  nameFieldValidation(name, messages) {
    if(!String(name) || String(name).length < 4 || String(name).length > 75)
      messages.push("The NAME field must be between 4 and 75 characters.");
    else if(__REGEX__.NAME.test(name) === false)
      messages.push("The NAME field is invalid!");
  }

  emailFieldValidation(email, messages) {
    if(!String(email) || String(email).length < 4 || String(email).length > 75)
      messages.push("The E-MAIL field must be between 4 and 75 characters.");
    else if(__REGEX__.EMAIL.test(email) === false)
      messages.push("The E-MAIL field is invalid!");
  }

  passwordFieldValidation(password, messages) {
    if(!String(password) || String(password).length < 8 || String(password).length > 30)
      messages.push("The PASSWORD field must be between 8 and 30 characters.");
    else if(__REGEX__.PASSWORD.test(password) === false)
      messages.push("The PASSWORD field must contain: At least 8 characters, 1 uppercase character, 1 number, 1 symbol and no identical sequence (Ex.: dd, aa, 44)!");
  }

}