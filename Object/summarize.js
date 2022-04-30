
// let person = {
//   name: "Arief",
//   lastName: "Kurniawan",
//   City: "Bandung",
//   Bachelor: true
// }
//
// let completePerson = Object.create(person);
//
// completePerson.hobby = "reading";
//
// console.log(completePerson.name);

// let o3 = Object.create(Object.prototype);
// o3.name = "arief";
// console.log(o3["name"]);


let o = {
  x:1,
  y:2
}

let r = Object.create(o);
r.name = "Arief"

for(let p in o){
  if(!o.hasOwnProperty(p) )
  continue;
  console.log(p);
}



// for(let i = 0; i <= 10;i++){
//   if(i === 3){
//     continue;
//   }
//   console.log(i);
// }
