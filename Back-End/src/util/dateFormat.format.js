import moment from "moment";

export class DateFormat {
    
    formatTimestamp(timestamp) {
        const pattern = "HH:mm:ss DD/MM/YYYY";
        return moment(timestamp).format(pattern);
    }

}