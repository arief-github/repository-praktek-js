let o = {}; //inherit from Object.prototype
o.x = 1;

let p = Object.create(o);
p.y = 2;

// console.log(p.y);

let q = Object.create(p);
q.z = 3;

// console.log(q.z);


let unitcircle = {r:1}
let c = Object.create(unitcircle);
c.x = 1; c.y = 1;
c.r = 2; // c overrides its inherited property
// inherited cannot set/edit object derived
// console.log(unitcircle.r);


console.log(c.k.length);
