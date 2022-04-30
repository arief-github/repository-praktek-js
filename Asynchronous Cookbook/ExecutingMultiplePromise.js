// Promise.all() method to combine multiple promises
function randomWaitPromise(){
  return new Promise((resolve, reject) => {
    const waitMiliseconds = Math.round(Math.random() * 10000);

    setTimeout(() => {
      console.log(`Resolved after ${waitMiliseconds}`);
      resolve(waitMiliseconds);
    }, waitMiliseconds);
  });
}

const promise1 = randomWaitPromise();
const promise2 = randomWaitPromise();
const promise3 = randomWaitPromise();
const promises = [promise1, promise2, promise3];
// promises.sort();

Promise.all(promises).then(values => {
  console.log(`All done with: ${values}` );
});
