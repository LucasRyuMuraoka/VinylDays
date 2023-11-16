
export class CardService {
  handleInputFilter(filter, albums) {
    const albumsWithFilter = [];
  
    if(filter.length !== 0) {
      albums.forEach((album) => {
          album.name.toLowerCase().includes(filter.toLowerCase()) && albumsWithFilter.push(album);
          
          album.artist.toLowerCase().includes(filter.toLowerCase()) && albumsWithFilter.push(album);

          album.category.toLowerCase().includes(filter.toLowerCase()) && albumsWithFilter.push(album);
      });

      return albumsWithFilter.filter((value, index, album) => album.indexOf(value) === index );
    }
  }
}
