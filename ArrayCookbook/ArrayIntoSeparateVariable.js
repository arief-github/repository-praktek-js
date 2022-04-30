// breaking down into separate variables
const stateValues = [459, 144, 96, 34,0, 14,90,10,35];
// const[arizona, missouri, idaho, nebraska, texas, minnesota] = stateValues;
// console.log(arizona, missouri);

// skip value
// const[arizona,,,nebraska, texas] = stateValues;
// console.log(arizona, nebraska, texas);

// use spread operator for hold rest value
// const[arizona, missouri, idaho, ...othersValue] = stateValues;
// console.log(othersValue);


// you can split them, declare and then give them value
let arizona, missouri, idaho, nebraska, texas, minnesota;
// [arizona, missouri,idaho, nebraska, texas, minnesota] = stateValues;
// console.log(arizona);
