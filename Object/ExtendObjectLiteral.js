// old style
// let x = 1, y = 2;
// let o = {
//   x: x,
//   y: y
// }

// ES6 style
// let x = 1, y = 2;
// let o = {x,y};
// console.log(o.x + o.y);


// computed properties
// const PROPERTY_NAME = "p1";
// function computePropertyName(){return "p"+2}
//
// let o = {};
// o[PROPERTY_NAME] = 1;
// o[computePropertyName()] = 2;
//
// console.log(o);

// ES6 Style
// const PROPERTY_NAME = "p1";
// function computePropertyName() {return "p"+2}
//
// let p = {
//   [PROPERTY_NAME]:1,
//   [computePropertyName()]:2
// }
//
// console.log(p.p1 + p.p2);

// Symbols as Property Names
// const extension = Symbol("my extension symbol");
// let o = {
//   [extension] : {}
// }
// o[extension].x = 0;
// o[extension].y = 1;
// console.log(o);

// const newSymbol = Symbol();
// console.log(typeof newSymbol === 'symbol');

// const anotherSymbol = Symbol("label");
// const yetAnotherSymbol = Symbol("label");
//
// console.log(anotherSymbol === yetAnotherSymbol);

// const Regnum_Animale = Symbol();
// const Regnum_Vegetable = Symbol();
// const Regnum_Lapideum = Symbol();
//
// function describe(kingdom){
//   switch(kingdom){
//     case Regnum_Animale :
//       return "Animal kingdom"
//     case Regnum_Vegetable :
//       return "Vegetable Kingdom"
//     case Regnum_Lapideum :
//       return "Mineral Kingdom"
//   }
// }
//
// console.log(describe(Regnum_Animale));


// spread operator
// let position = {x:0, y:0};
// let dimensions = {width: 100, height: 75}
// let rect = {...position, ...dimensions};
// let resultMerging = rect.x + rect.y + rect.width + rect.height;
// console.log(resultMerging);

// let o = {x : 1};
// let p = {x : 0, ...o};
// let q = {...o, x:2}
// console.log(q.x);

// let o = Object.create({x:1});
// let p = {...o};
// console.log(p.x);


// shorthand method
// let square = {
//   area(){return this.side * this.side;},
//   side: 10
// }
//
// console.log(square.area());

// const METHOD_NAME ="m";
// let weirdMethods = {
//   [METHOD_NAME](x){return x+2}
// }
// console.log(weirdMethods[METHOD_NAME](10));


// getter and setter
// let p = {
//   x: 1.0,
//   y: 1.0,
//   get r() {return Math.hypot(this.x, this.y)},
//   set r(newvalue) {
//     let oldValue = Math.hypot(this.x, this.y);
//     let ratio = newvalue/oldValue;
//     this.x *= ratio;
//     this.y *= ratio;
//   },
//   get theta() {return Math.atan2(this.y, this.x);}
// }
//
//
// console.log(p.r = 2);


const serialnum = {
  _n:11,
  get next(){return this._n++;},
  set next(n){
    if(n > this._n) this._n = n;
    else throw new Error("serial number can onlu be set to a larger value")
  }
}

console.log(serialnum.next = 10);
