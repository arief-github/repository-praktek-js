// copy the properties of one object to another object
let target = {x:1}, source = {y:2, z:3}

for(let key of Object.keys(source)){
  target[key] = source[key];
}

console.log(target);

// in ES6 , you can use Object.assign
// expects two or more objects as its arguments
function merge(target, ...sources){
  for(let source of sources){
    for(let key of Object.keys(source)){
      if(!(key in target)){
        target[key] = source[key];
      }
    }
  }
  return target;
}

// let ObjMerge = merge({x:1},{x:2,y:2}, {y:3,z:4});
// console.log(Object.assign({x:1},{x:2,y:2}, {y:3,z:4}));
// console.log(ObjMerge);


// addition concept
let user = {
  firstName: "John"
};

Object.assign(user, {lastname: "Doe", age:39});
// console.log(user);



let obj1 = {
  a:1
}

let obj2 = {
  b:undefined
}

let obj3 = {
  c:3
}

let mergeObject = Object.assign(obj1, obj2, obj3);
// console.log(typeof mergeObject === 'object');
console.log(obj1);

// primitive akan ditampung, sedangkan null dan undefined akan diabaikan
// let [var_1, var_2, var_3, var_4] = ['abc',true,10,Symbol('foo')];
// let obj = Object.assign({}, var_1, null, var_2, undefined, var_3, var_4);
// console.log(obj);
