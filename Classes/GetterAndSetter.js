class Temperature{
  constructor(celsius){
    this.celsius = celsius;
  }

  get fahrenheit(){
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value){
    this.celsius = (value - 32)/1.8;
  }

  static fromFahrenheit(value){
    return new Temperature((value - 32) / 1.8);
  }
}

let suhu = new Temperature(10);

console.log(suhu.fahrenheit);

suhu.fahrenheit = 80;
console.log(suhu.celsius);

console.log(Temperature.fromFahrenheit(10));
