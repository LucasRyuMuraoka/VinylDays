import { Base64 as base64 } from "js-base64";


export class Base64 {

    encode(string) {
        return base64.encode(string);
    }

    decode(string) {
        return base64.decode(string);
    }

    matches(expected, encodedString) {
        if(!encodedString || !expected)
            return false;
        
        const decodedString = this.decode(encodedString);
        return (decodedString === expected) ? true : false;
    }

}