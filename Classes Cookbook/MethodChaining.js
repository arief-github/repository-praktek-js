class Book{
  constructor(title, author, price, publishDate){
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishDate = publishDate;
  }
  raisePrice(percent){
    const increase = this.price * percent;
    this.price += Math.round(increase)/100;
    return this;
  }
  releaseNewEdition(){
    this.publishDate = new Date();
    return this;
  }
  getRaisedPriceBook(percent){
    const increase = this.price*percent;
    return new Book(this.title, this.author, Math.round(increase)/100, this.publishDate);
  }
  getNewEdition(){
    return new Book(this.title, this.author, this.price, new Date());
  }
}

const book = new Book('I Love Mathematics','Arief Kurniawan', 29.99, new Date(2010,2,2));
book.getNewEdition = new Book('A B C for action','Lie wn',19.99, new Date(2010,1,1))
console.log(book.getNewEdition);


// another method chaining
// let originalPieceOfHtml = "hello";
// const safePieceOfHtml = originalPieceOfHtml.replaceAll('<','&lt').replaceAll('>','&gt');

// method chaining doesnt have to be with the same method
const evens = [2,4,6,8];
const odds = [1,3,5,7,9];

const evensAndOdds = evens.concat(odds).sort();
// console.log(evensAndOdds);
