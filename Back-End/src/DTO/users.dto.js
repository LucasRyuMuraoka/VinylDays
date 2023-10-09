import { DateFormat } from "../util/dateFormat.format.js";
 
const dateFormat = new DateFormat();

export class UsersDTO {

    format(user) {
        const id = String(user.id);
        const email = String(user.email);
        const emailDomain = email.substring(email.indexOf("@"), email.length);
        const password = String(user.password);

        return {
            id: id.substring(0, 16).concat("..."),
            name: user.name,
            email: email.substring(0, 4).concat("...").concat(emailDomain),
            password: password.substring(0, (password.length / 2)).concat("..."),
            createdAt: dateFormat.formatTimestamp(user.createdAt),
            updatedAt: dateFormat.formatTimestamp(user.updatedAt)
        }
    }

    toJson(object) {
        return JSON.parse(JSON.stringify(object));
    }

}