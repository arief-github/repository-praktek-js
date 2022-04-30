// check at runtime if an object has a given property
// Use the in operator to look for a property by a name
const address = {
  country: 'Australia',
  city: 'sydney',
  streetNum: '412',
  streetName: 'Worcestire Boulevard',
  streetClue: undefined,
}
// checking with in , support inherited

// if('country' in address){
//   console.log('valid');
// }
// console.log('city' in address);

// checking with hasOwnProperty not support inherited
const politize = Object.create(address);
console.log(address.hasOwnProperty('country'));
console.log(politize.hasOwnProperty('country'));
