function sumRounds(...numbers){
  let sum = 0;
  for(let i=0;i < numbers.length; i+=1){
    sum += Math.round(numbers[i]);
  }
  return sum;
}
console.log(sumRounds(2.4,18.1,7.5,8.1,2.4,5.6));
