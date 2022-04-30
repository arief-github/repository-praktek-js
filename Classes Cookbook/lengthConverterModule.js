// Choose which code details you want to export (make available to other scripts in
// other files).
// In another script, import the features you want to use.

const Units = {
  Meters: 100,
  Centimeters: 1,
  Kilometers: 100000,
  Yards: 91.44,
  Feet: 30.48,
  Miles: 160934,
  Furlongs: 20116.8,
  Elephants: 625,
  Boeing747s: 7100
}

class InvisbleLogger{
  static log(){
    console.log('Greeting from invisible logger');
  }
}

class LengthConverter{
  static Convert(value, fromUnit, toUnit){
    InvisbleLogger.log();
    return value * fromUnit/toUnit;
  }
}

export {Units, LengthConverter}
