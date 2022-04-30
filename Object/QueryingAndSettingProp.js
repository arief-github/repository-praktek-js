let book = Object.create({name:"melangit",author:{surename : "arief", lastname:"kurniawan"}});

let book1 = {

};
// set
book1.edition = "7";
// query
let author = book.author;
let surename = author.surename;
let bookTitle = book["name"];
console.log(book1);
