// class Book{
//   constructor(title, firstName, lastName){
//     this.title = title;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   static createSequel(prevBook, title){
//     return new Book(title,prevBook.firstName, prevBook.lastName);
//   }
// }
// create an instance of Book
// const book = new Book('Good Design','Polly','Morfissim');

// use static method
// const sequel = Book.createSequel(book, 'Even Gooder Design');
// console.log(sequel);

class Author{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Book{
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
  static createSequel(prevBook, title){
    return new Book(title, prevBook.author);
  }
  static createTrilogy(author, title1, title2, title3){
    return[new Book(title1, author), new Book(title2, author), new Book(title3, author)]
  }
}

const author = new Author('Koh', 'Der');
const books = Book.createTrilogy(author, 'Bumi','Bulan','Bintang');
console.log(books);
