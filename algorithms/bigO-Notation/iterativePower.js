function iterativePower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i += 1) {
    result *= number;
  }

  return result;
}

let result = iterativePower(2,12);
console.log(result);

// time complexity : 0(power)
