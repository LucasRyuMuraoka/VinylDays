export class CategoryService {
  arrayWithoutDuplicatedValues(array) {
    const auxArray = [];

    if(array instanceof Array) {
      array.forEach(item => {
        if(!auxArray.includes(item.title)) {
          auxArray.push(item.title);
        }
      });
    }

    return auxArray;
  }
}