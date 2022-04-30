let book = {
  title:"Satu hari di 2018",
  author: "Tere Liye",
  publish: "Gramedia"
}


// a verbose and explicit technique
let surename = undefined;
if(book && book.author){
  surename = book.author.surename;
}
