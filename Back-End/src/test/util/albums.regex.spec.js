import { __REGEX__ } from "../../util/albums.regex.js";

describe('Regex Validation to Albums Table', () => {
  test('Album Name test', () => {
    const validAlbumName = "Vibes";
    expect(true).toBe(__REGEX__.ALBUM_NAME.test(validAlbumName));

    const invalidAlbumName = ""
    expect(false).toBe(__REGEX__.ALBUM_NAME.test(invalidAlbumName));
  });

  test('Artist Name test', () => {
    const validArtistName = "JuiceWRLD";
    expect(true).toBe(__REGEX__.ARTIST_NAME.test(validArtistName));
  
    const invalidArtistName = "";
    expect(false).toBe(__REGEX__.ARTIST_NAME.test(invalidArtistName));
<<<<<<< HEAD
    });

    test('Category Name test', () => {
      const validCategoryName = "Hip-hop";
      expect(true).toBe(__REGEX__.CATEGORY_NAME.test(validCategoryName));

      const invalidCategoryName = "Hip-@$";
      expect(false).toBe(__REGEX__.CATEGORY_NAME.test(invalidCategoryName));

      const invalidCategoryName2 = "";
      expect(false).toBe(__REGEX__.CATEGORY_NAME.test(invalidCategoryName2));
=======

>>>>>>> b77c73a691b816656574c0f9cc3fb18e6e338fcf
    });
});
