import { DateFormat } from "../util/dateFormat.format.js";
 
const dateFormat = new DateFormat();

export class UsersDTO {

    format(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt: dateFormat.formatTimestamp(user.createdAt),
            updatedAt: dateFormat.formatTimestamp(user.updatedAt)
        }
    }

    toJson(object) {
        return JSON.parse(JSON.stringify(object));
    }

}
