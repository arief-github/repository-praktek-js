// memasukkan 2 atau lebih parameter dengan nilai
function dateDifferenceInSeconds(newerDate, olderDate, {discardTime, discardYears, precision} = {}){
  if(discardTime){
    newerDate = newerDate.setHours(0,0,0,0);
    olderDate = newerDate.setHours(0,0,0,0);
  }
  if(discardYears){
    newerDate.setYear(0);
    olderDate.setYear(0);
  }
  const differenceInSecond = (newerDate.getTime() - olderDate.getTime())/1000;
  return differenceInSecond.toFixed(precision);
}


// call dateDifferenceInSeconds
// compare the current date to an older date
const newDate = new Date();
const oldDate = new Date(2010,1,10);

// call the function without an object literal
let difference = dateDifferenceInSeconds(newDate, oldDate);
// console.log(difference);

// call the function with an object literal, and specify two props
difference = dateDifferenceInSeconds(
  newDate, oldDate,{discardYears:true, precision:2}
)

console.log(difference);
