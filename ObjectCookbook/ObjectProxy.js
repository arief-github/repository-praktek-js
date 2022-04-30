// this is the object that well match with the proxy
const product = {name: "Banana"}
// handler proxy trap
const propertyChecker = {
  set: function(target, property, value){
    if(property === 'price'){
      if(typeof value !== 'number'){
        throw new TypeError('price is not a number')
      }
      else if(value <= 0){
        throw new RangeError('price must be greater than zero');
      }
    }
    else if(property !== 'name'){
      throw new ReferenceError(`property '${property}' not valid`);
    }
    target[property] = value;
  }
}

const proxy = new Proxy(product, propertyChecker);

proxy.price = -1.00;
console.log(proxy);

// proxy needs to Parameter  the object you want to watch,
//and the handler that can intercept the operations you choose.
// const proxy = new Proxy(product, propertyChecker);

// proxy.type = -1.00;

// cant add string
// proxy.price = 'three dolars';

// cant add new properties
// proxy.lastName = "bill";

// range error
// proxy.price = -1.00;

// can add property
proxy.name = "arief";
// console.log(proxy.name);



// const handler = {
//   get: function(array, index){
//     if(array[index] === 0){
//       return false
//     }else{
//       return true
//     }
//   }
// }
//
// const numbers = [1,0,6,1,1,0];
// const proxyOfArray = new Proxy(numbers, handler);
//
// console.log(proxyOfArray[5]);

// let handler = {
//   get: function(target, property){
//     if(!Reflect.has(target, property)){
//       return {
//         value: undefined,
//         type: 'undefined'
//       };
//     }
//     let value = Reflect.get(target, property);
//     return {
//       value: value,
//       type: typeof value
//     }
//   }
// };
//
// let proxied = new Proxy({foo: 'bar'}, handler);
// console.log(proxied.bar);



// let object = {};
// let handler = {
//   set: function(target, prop, value){
//     if('string' === typeof value){
//       target[prop] = value + " went through proxy";
//     }
//   }
// }
//
// let proxied = new Proxy(object, handler);
