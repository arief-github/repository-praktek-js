// creating item where each item is labeled with a unique string key
// use Map() object

const products = new Map();

// adding key(unique) + value with set()
products.set('SB001',{name: 'Nuvo Family', price: 4500});
products.set('SMP001',{name: 'Head and Shoulders', price:2000});
products.set('DET001',{name: 'Rinso', price:1500});

// checking existing item with has()
console.log(products.has('SB001'));
// console.log(products.has('Nuvo Family'));
// console.log(products.has('DBN002'));

// retrieving an item
console.log(products.get('SB001'));
// add more logic
// if(typeof products !== 'undefined'){
//   console.log(products.price);
// }

// delete an item
console.log(products.delete('DET001'));
// checking length/size Map()
console.log(products.size);
