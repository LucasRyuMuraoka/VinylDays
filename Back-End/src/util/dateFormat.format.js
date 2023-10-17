import moment from "moment";

export class DateFormat {
    
    formatTimestamp(timestamp) {
        const pattern = "HH:mm:ss DD/MM/YYYY";
        return moment(timestamp).format(pattern);
    }

    parseDatabaseFormat(timestampFormatted) {
        let pattern = "HH:mm:ss DD/MM/YYYY";
        let defaultISO = moment(timestampFormatted, pattern).toISOString();

        pattern = "YYYY-MM-DD HH:mm:ss";
        return moment(defaultISO).format(pattern);
    }

}