const product = {
  name: "palm oil",
  weight: 1,
  pack : true,
  expired: false,
  description: "product has been pass tested"
}

console.log(Object.getOwnPropertySymbols(product));
// these print output same
console.log(Object.keys(product));
console.log(Object.getOwnPropertyNames(product));
