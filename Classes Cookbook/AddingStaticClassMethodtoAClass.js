// define own replaceAll
if(typeof String.prototype.replaceAll === "undefined") {
    String.prototype.replaceAll = function(match, replace) {
       return this.replace(new RegExp(match, 'g'), () => replace);
    }
}


class Book{
  constructor(isbn, title, author, publishDate){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
  }

  static isEqual(book, otherBook){
    if(book instanceof Book && otherBook instanceof Book){
      return (book.isbn.replaceAll('-','') === otherBook.isbn.replaceAll('-',''));
    }else{
      return false;
    }
  }

  // accessor method also can be static
  static get isbnPrefix(){
    return '978-1';
  }
}

const firstPrinting = new Book('978-3-16-1488410-0', 'A.I is not a threat','Anne Kurniawan', new Date(2019,2,2));
const secondPrinting = new Book('978-3-16-1488410-0','A.I is not a threat','A Kurniawan', new Date(2021,2,10));
// acessing static through the class, not need to instance
const sameBook = Book.isEqual(firstPrinting, secondPrinting);
console.log(sameBook);
