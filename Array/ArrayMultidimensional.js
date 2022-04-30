// javascript doesnt support true multidimensional array
let table = new Array(10);
// console.log(table);
for(let i = 0; i < table.length; i++){
  table[i] = new Array(10);
}
for(let row=0; row < table.length; row++){
  for(let col = 0; col < table[row].length; col++){
    table[row][col] = row * col;
  }
}
console.log(table[7][7]);
