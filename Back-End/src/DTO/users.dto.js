import { DateFormat } from "../util/dateFormat.format.js";
 
const dateFormat = new DateFormat();

export class UsersDTO {

    format(user) {
        const id = String(user.id);
        const email = String(user.email);
        const password = String(user.password);

        return {
            id: id,
            name: user.name,
            email: email,
            password: password.substring(0, (password.length / 2)).concat("..."),
            createdAt: dateFormat.formatTimestamp(user.createdAt),
            updatedAt: dateFormat.formatTimestamp(user.updatedAt)
        }
    }

    toJson(object) {
        return JSON.parse(JSON.stringify(object));
    }

}
