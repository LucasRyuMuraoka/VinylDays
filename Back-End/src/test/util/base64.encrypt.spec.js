import { Base64 } from "../../util/base64";

const base64 = new Base64();

describe("Base64 Algorithm Testing", () => {
    
    /* Encode */
    test("Given a string, encrypt them and compare them", async () =>{
        const defaultEncodedString = "SGVsbG8sIFdvcmxkIQ==";
        
        const defaultString = "Hello, World!";
        const encodedString = base64.encode(defaultString);

        /* expect(receive).toBe(expected); */
        expect(encodedString).toBe(defaultEncodedString);
    });

    /* Decode */
    test("Given an encrypted string, decrypt and compare them", () => {
        const defaultString = "Hello, World!";

        const defaultEncodedString = "SGVsbG8sIFdvcmxkIQ==";
        const decodedString = base64.decode(defaultEncodedString);

        expect(decodedString).toBe(defaultString);
    });


    /* Mathches */
    test("Given an encrypted string and default string, compare them", async () => {
        const encodedString = "SGVsbG8sIFdvcmxkIQ==";
        const decodedString = "Hello, World!";

        const isMatches = base64.matches(decodedString, encodedString);

        expect(isMatches).toBe(true);
    });
});