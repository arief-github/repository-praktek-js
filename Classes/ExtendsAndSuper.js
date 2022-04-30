class EZArray extends Array {
  get first() {return this[0];}
  get last() {return this[this.length-1]; }
}

let resArr = new EZArray();
// true : is subclass instance
// console.log(resArr instanceof EZArray);
// true : is superclass instance
// console.log(resArr instanceof Array);

// also we can use inherited methods
let pushA = resArr.push(1,2,3,4);
let popA = resArr.pop()
// console.log(Array.isArray(resArr));
// console.log(EZArray.isArray(resArr));

class Animal{
  constructor(name){
    this.speed = 0;
    this.name = name;
  }
}
class Rabbit extends Animal{
  constructor(name, earlength){
    // this.name = name;
    super(name);
    this.earlength = earlength;
  }
}

let rabbit = new Rabbit("White Rabbit",10);
// console.log(rabbit.name);


// super keyword to invoke the constructor and methods of the superclass
class TypedMap extends Map{
  constructor(keyType, valueType, entries){
    if(entries){
      for(let [k,v] of entries){
        if(typeof k !== keyType || typeof v !== valueType){
          throw new TypeError(`Wrong type for entry [${k},${v}]`);
        }
      }
    }
    super(entries);
    this.keyType = keyType;
    this.valueType = valueType;
  }
  set(key, value){
    if(this.keyType && typeof key !== this.keyType){
      throw new TypeError(`${key} is not of type ${this.keyType}`)
    }
    if(this.valueType && typeof value !== this.valueType){
      throw new TypeError(`${value} is not of type ${this.valueType}`)
    }
    return super.set(key, value);
  }
}

const check = new TypedMap('1','John','willock');
console.log(check);
