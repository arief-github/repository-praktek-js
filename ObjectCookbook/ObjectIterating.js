const address = {
  country:'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Western Boulevard'
}

// only print keys
const properties = Object.getOwnPropertyDescriptors(address);

for(let obj in address){
  console.log(obj);
}

console.log(properties);

// show props and values
// for(const property of properties){
//   console.log(`Property: ${property}, value: ${address[property]}`);
// }

// checking of length
// console.log(`The address object has a length of ${properties.length}`);


const object = {
  a:1,
  b:2,
  c:3
}

for(let property in object){
  console.log(`${property}: ${object[property]}`);
}
