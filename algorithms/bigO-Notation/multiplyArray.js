function multiplyArrayInPlace(array, multiplier) {
  for(let i = 0; i < array.length; i += 1) {
    array[i] *= multiplier;
  }
  return array;
}

console.log(multiplyArrayInPlace([1,2,3] , 2));
