import { InvalidFields } from "../error/specialization/InvalidFields.error.js";
import { __REGEX__ } from "./albums.regex.js";

export class AlbumsValidations {
  validation(album) {
    return new Promise((resolve, reject) => {
      const messages = [];
    
      this.albumNameFieldValidation(album.name, messages);
      this.artistFieldValidation(album.artist, messages);
      this.categoryFieldValidation(album.category, messages);
      this.priceFieldValidation(album.price, messages);
      this.oldPriceFieldValidation(album, messages);

      if(messages.length > 0)
        reject(new InvalidFields(messages));
      else
        resolve(album);
    });
  }

  albumNameFieldValidation(albumName, messages) {
    if(!String(albumName) || String(albumName).length < 4 || String(albumName).length > 45)
      messages.push("The NAME field must be between 4 and 45 characters.");
    else if(__REGEX__.ALBUM_NAME.test(albumName) === false)
      messages.push("The NAME field is invalid!");
  }

  artistFieldValidation(artist, messages) {
    if(!String(artist) || String(artist).length < 4 || String(artist).length > 60)
      messages.push("The ARTIST field must be between 4 and 60 characters.");
    else if(__REGEX__.ARTIST_NAME.test(artist) === false)
      messages.push("The ARTIST field is invalid!");
  }

  categoryFieldValidation(category, messages) {
    if(!String(category) || String(category).length < 3 || String(category).length > 60)
      messages.push("The CATEGORY field must be between 3 and 60 characters.");
    else if(__REGEX__.CATEGORY_NAME.test(category) === false)
      messages.push("The CATEGORY field is invalid!");
  }

	priceFieldValidation(price, messages) {
		if(typeof price !== 'number' || !price)
      messages.push("The PRICE field is required (NUMBER)!");
	}

	oldPriceFieldValidation(album, messages) {
		if (!album.oldPrice)
			album.oldPrice = album.price;
    else if (typeof album.oldPrice !== 'number')
      messages.push("The OLD PRICE field is required (NUMBER)!");
    else if (album.oldPrice < album.price)
      messages.push("The previous price cannot be higher than the current price!");
  }
}
