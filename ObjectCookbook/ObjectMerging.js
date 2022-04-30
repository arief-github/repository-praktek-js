// combine their data into single object
const address = {
  country: 'Australia',
  city: 'sydney',
  streetNum: '412',
  streetName: 'Western Boulevard'
}

const customer = {
  firstName: 'Lisa',
  lastName: 'Stanecki',
  country: 'South Korea'
}

const customerWithAddress = {...customer, ...address}
// console.log(customerWithAddress);

// lets see the problem if 2 object have two same prop
// shows australia
console.log(customerWithAddress.country);
