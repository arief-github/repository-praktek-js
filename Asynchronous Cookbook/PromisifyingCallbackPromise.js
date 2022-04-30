// traditional, callback-based asynchronous

function factorializeNumber(number, successCallback, failureCallback) {
  if (number < 0) {
    failureCallback(
      new Error('Factorial are only defined for positive numbers')
    );
  } else if (number !== Math.trunc(number)) {
    failureCallback(new Error('Factorials are only defined for integers'))
  } else {
    setTimeout(() => {
      if (number === 0 || number === 1) {
        successCallback(1);
      } else {
        let result = number;
        while (number > 1) {
          number -= 1;
          result += number;
        }
        successCallback(result);
      }
    }, 5000)
  }
}
//
// function logResult(result){
//   console.log(`5! = ${result}`);
// }
//
// function logError(error){
//   console.log(`Error: ${error.message}`);
// }
//
// factorializeNumber(5, logResult, logError);

// create function and wrap the Promise()
function factorializeNumberPromise(number) {
  return new Promise((resolve, reject) => {
    factorializeNumber(number,
      result => {
        resolve(result);
      },
      error => {
        reject(error);
      }
    )
  })
}

factorializeNumberPromise(5).then(result => {
  console.log(`5! = ${result}`);
})

// you can also catch potential error
// factorializeNumberPromise('Bad value')
// .then(result => {
//   console.log(`6! = ${result}`);
// })
// .catch(error => {
//   console.log(error);
// });
