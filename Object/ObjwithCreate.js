let o1 = Object.create({x:1,y:1});
let o2 = Object.create({z:null});
console.log(o1.x + o2.z);

let o3 = Object.create(Object.prototype); //o3 seperti {} dan new Object()
o3.name = "Arief"
o3.lastName = "Kurniawan"
console.log(o3);
