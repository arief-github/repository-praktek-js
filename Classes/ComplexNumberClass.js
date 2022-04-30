class Complex{
  constructor(real, imaginary){
    // this fields holds the real part of the number (bilangan riil)
    this.r = real;
    // this fields holds the imaginary part (bilangan imajiner)
    this.i = imaginary;
  }
// need instance
  plus(that){
    return new Complex(this.r + that.r, this.i + that.i);
  }
  times(that){
    return new Complex(this.r * that.r - this.i * that.i,
    this.r * that.i - this.i * that.r);
  }
// dont need to instance
  static sum(c,d){
    return c.plus(d);
  }

  static product(c,d){
    return c.times(d);
  }

// get : its mean class have read property accessor
  get real(){
    return this.r;
  }

  get imaginary(){
    return this.i;
  }

  get magnitude(){
    return Math.hypot(this.r, this.i);
  }

// have convert string method
  toString(){
    return `{${this.r}, ${this.i};}`
  }

  equals(that){
    return that instanceof Complex && this.r === that.r &&
    this.i === that.i;
  }
}
// instance first
let c = new Complex(2,3);
let d = new Complex(c.i, c.r);

// use toString method to convert number to String
console.log(c.plus(d).toString());
// without instanciate
let res = Complex.product(c,d);
// console.log(res);
