let array = [1,2,3,4,5,6,7];
let filter = array.filter((value) => value % 2 === 0);
let map = array.map((value) => value + 2);
let reduce = array.reduce((value, accumulator) => value * accumulator);

let cs = document.getElementById("script");
cs.innerText = map;
