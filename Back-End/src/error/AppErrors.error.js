import { DateFormat } from "../util/dateFormat.format.js";

const dateFormat = new DateFormat();

export class AppErrors extends Error {
    constructor(message, type, status) {
        super(message);
        this.name = type;
        this.status = status;
        this.date = dateFormat.formatTimestamp(new Date());
    }
}