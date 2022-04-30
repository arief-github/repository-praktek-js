// chaining promise
// fetch(documentURL)
// .then(response => response.json())
// .then(document => {
//   return render(document);
// })
// .then(rendered => {
//   cacheInDatabase(rendered);
// })
// .catch(error => handle(error));

// professional javascript
// controlling promise state
// new Promise(() => setTimeout(console.log, 0, 'executor'));
// setTimeout(console.log,0,'promise initialized');

// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));
// setTimeout(console.log,0,p);

// let p = new Promise((resolve, reject) => {
//   setTimeout(reject, 10000);
// })
//
// setTimeout(console.log, 0, p);
// setTimeout(console.log, 11000, p);


// Promise casting with Promise.resolve()
// setTimeout(console.log,0,Promise.resolve());
// setTimeout(console.log,0,Promise.resolve(3));
// setTimeout(console.log,0,Promise.resolve(4,5,6));


// Promise.resolve is an idempotent method
// let p = Promise.resolve(7);
// setTimeout(console.log,0,p === Promise.resolve(p));
// setTimeout(console.log,0,p === Promise.resolve(Promise.resolve(p)));

// let p = new Promise(() => {});
// setTimeout(console.log,0,p);
// setTimeout(console.log,0,Promise.resolve(p));
// setTimeout(console.log,0,p === Promise.resolve(p));

// let p = Promise.resolve(new Error('foo'));
// setTimeout(console.log,0,p);

// Promise Rejection with Promise.reject()
// The following two promise instantiations are effectively equivalent
// let p1 = new Promise((resolve, reject) => reject());
// let p2 = Promise.reject();

// let p = Promise.reject(3);
// setTimeout(console.log, 0, p);
// p.then(null, (e) => setTimeout(console.log, 0,e));
// setTimeout(console.log, 0, Promise.reject(Promise.resolve()));

// Promise.prototype.then()
// function onResolved(id){
//   setTimeout(console.log, 0, id, 'resolved');
// }
// function onRejected(id){
//   setTimeout(console.log, 0, id, 'rejected');
// }
//
// let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
// let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
//
// p1.then(() => onResolved('p1'), () => onRejected('p1'));
// p2.then(() => onResolved('p2'), () => onRejected('p2'));

// Promise.prototype.then return a new Promise instance
// let p1 = new Promise(() => {});
// let p2 = p1.then();
// setTimeout(console.log, 0, p1);
// setTimeout(console.log, 0, p2);
// setTimeout(console.log, 0, p1 === p2);

// let p1 = Promise.resolve('foo');
// let p2 = p1.then();
// setTimeout(console.log, 0, p2);

// implicit return value
// let p3 = p1.then(() => undefined);
// let p4 = p1.then(() => {});
// let p5 = p1.then(() => Promise.resolve());
// setTimeout(console.log,0,p3);
// setTimeout(console.log,0,p4);
// setTimeout(console.log,0,p5);
// these are equivalent , explicit return value
// let p6 = p1.then(null,() => 'bar');
// let p7 = p1.then(null,() => Promise.resolve('bar'));
// setTimeout(console.log, 0, p6);
// setTimeout(console.log, 0, p7);

// Promise.resolve() preserves the returned promise
// let p8 = p1.then(() => new Promise(() => {}));
// let p9 = p1.then(() => Promise.reject());
// setTimeout(console.log, 0, p8);
// setTimeout(console.log, 0, p9);

// throwing an exception will return a rejected Promise
// let p10 = p1.then(() => {throw 'baz';});
// setTimeout(console.log,0,p10);

// returning error will not trigger the same rejection
// let p11 = p1.then(() => Error('qux'));
// setTimeout(console.log, 0, p11);


// Promise.prototype.catch
// let p = Promise.reject();
// let onRejected = function(e){
//   setTimeout(console.log,0,'rejected');
// }

// these two reject handlers behave identically
// p.then(null, onRejected);
// p.catch(onRejected);
//
// let p1 = new Promise(() => {});
// let p2 = p1.catch();

// setTimeout(console.log, 0, p1);
// setTimeout(console.log, 0, p2);
// setTimeout(console.log, 0, p1 === p2);

// Promise.prototype.finally()
// let p1 = Promise.resolve();
// let p2 = Promise.reject();
// let onFinally = function(){
//   setTimeout(console.log,0,'Finally')
// }
//
// p1.finally(onFinally);
// p2.finally(onFinally);

// Promise.prototype.finally returns a new Promise instance
// let p1 = new Promise(() => {});
// let p2 = p1.finally();
//
// setTimeout(console.log, 0, p1);
// setTimeout(console.log, 0, p2);
// setTimeout(console.log, 0, p1 === p2);

// p2 to p8 is same results
// let p1 = Promise.resolve('foo');
// let p2 = p1.finally();
// let p3 = p1.finally(() => undefined);
// let p4 = p1.finally(() => {});
// let p5 = p1.finally(() => Promise.resolve());
// let p6 = p1.finally(() => 'bar');
// let p7 = p1.finally(() => Promise.resolve('bar'));
// let p8 = p1.finally(() => Error('qux'));

// setTimeout(console.log,0,p8);
// let p9 = p1.finally(() => new Promise(() => {}));
// let p10 = p1.finally(() => Promise.reject());
// let p11 = p1.finally(() => {throw 'baz';});

// let p2 = p1.finally(
//   () => new Promise((resolve, reject) => setTimeout(() => resolve('bar')))
// )
// setTimeout(console.log, 0, p2);
// setTimeout(() => setTimeout(console.log, 0, p2), 2000);

// Non-reetrancy Promise
// let p1 = Promise.resolve();
// p1.then(() => console.log('p1.then() resolved'));
// console.log('p1.then() returns');
//
// let p2 = Promise.reject();
// p2.then(null, () => console.log('p2.then() onRejected'));
// console.log('p2.then() returns');
//
// let p3 = Promise.reject();
// p3.catch(() => console.log('p3.catch() onRejected'));
// console.log('p3.catch() returns');
//
// let p4 = Promise.resolve();
// p4.finally(() => console.log('p4.finally() onFinally'));
// console.log('p4.finally() returns');

// let synchronousResolve;
// let p = new Promise((resolve) => {
//   synchronousResolve = function(){
//     console.log('1 : invoking resolve');
//     resolve();
//     console.log('2 : resolve() returns');
//   }
// })
// p.then(() => console.log('4: then() handler executes'));
// synchronousResolve();
// console.log('3: synchronousResolve() returns');


// Sibling handler Order of execution
// let p1 = Promise.resolve();
// let p2 = Promise.reject();
//
// p1.then(() => setTimeout(console.log, 0, 1));
// p1.then(() => setTimeout(console.log, 0, 2));
//
// p2.then(null, () => setTimeout(console.log, 0, 3));
// p2.then(null, () => setTimeout(console.log, 0, 4));
//
// p2.catch(() => setTimeout(console.log,0,5));
// p2.catch(() => setTimeout(console.log,0,6));
//
// p1.finally(() => setTimeout(console.log,0,7));
// p1.finally(() => setTimeout(console.log,0,8));
//
// console.log("Hello World");

// Resolved Value and Reject Reason Passing
// let p1 = new Promise((resolve, reject) => resolve('foo'));
// p1.then((value) => console.log(value));
//
// let p2 = new Promise((resolve, reject) => reject('bar'));
// p2.catch((reason) => console.log(reason));
//
// let p3 = Promise.resolve('foo');
// p3.then((value) => console.log(value));
//
// let p4 = Promise.reject('bar');
// p4.catch((reason) => console.log(reason));

// Rejecting Promise and Rejection Error Handilng
// throwing an error inside a promise executor or handler will cause
// it to reject

// let p1 = new Promise((resolve, reject) => reject(Error('foo')));
// let p2 = new Promise((resolve, reject) => {throw Error('foo')});
// let p3 = Promise.resolve().then(() => {throw Error('foo')});
// let p4 = Promise.reject(Error('foo'));
//
// setTimeout(console.log,0,p1);
// setTimeout(console.log,0,p2);
// setTimeout(console.log,0,p3);
// setTimeout(console.log,0,p4);


// throw Error('foo');
// console.log('bar');

// Promise.reject(Error('foo'));
// console.log('bar');

// let p = new Promise((resolve, reject) => {
//   try{
//     throw Error('foo');
//   }catch(e){}
//   resolve('bar');
// });
//
// setTimeout(console.log, 0,p);

// synchronous/synchronous
// console.log('begin synchronous execution');
// try{
//   throw Error('foo');
// }catch(e){
//   console.log('caught error', e);
// }
// console.log('continue synchronous execution');


// new Promise((resolve, reject) => {
//   console.log('begin asynchronous execution');
//   reject(Error('bar'));
// }).catch((e) => {
//   console.log('caught error', e);
// }).then(() => {
//   console.log('continue asynchronous execution');
// })

// Promise chaining
// let p = new Promise((resolve, reject) => {
//   console.log('first');
//   resolve();
// });
// p.then(() => console.log('second'))
// .then(() => console.log('third'))
// .then(() => console.log('fourth'))

// let p1 = new Promise((resolve, reject) => {
//   console.log('p1 executor');
//   setTimeout(resolve, 3000);
// });
// p1.then(() => new Promise((resolve, reject) => {
//   console.log('p2 executor');
//   setTimeout(resolve, 3000);
// }))
// .then(() => new Promise((resolve, reject) => {
//   console.log('p3 executor');
//   setTimeout(resolve, 1000);
// }))
// .then(() => new Promise((resolve, reject) => {
//   console.log('p4 executor');
//   setTimeout(resolve, 1000);
// }))


// with / without promise
// function delayedResolve(str){
//   return new Promise((resolve, reject) => {
//     console.log(str);
//     setTimeout(resolve, 1000);
//   });
// }
//
// delayedResolve('p1 executor')
// .then(() => delayedResolve('p2 executor'))
// .then(() => delayedResolve('p3 executor'))
// .then(() => delayedResolve('p4 executor'))


// function delayedExecute(str, callback = null){
//   setTimeout(() => {
//     console.log(str);
//     callback && callback();
//   }, 1000)
// }
//
// delayedExecute('p1 callback', () => {
//   delayedExecute('p2 callback', () => {
//     delayedExecute('p3 callback', () => {
//       delayedExecute('p4 callback');
//     })
//   })
// })

// chaining then catch and Finally
// let p = new Promise((resolve, reject) => {
//   console.log('initial promise rejects');
//   reject();
// });
//
// p.catch(() => console.log('reject handler'))
// .then(() => console.log('resolve handler'))
// .finally(() => console.log('finally handler'))

// Promise Graph = Promise execution
// let A = new Promise((resolve, reject) => {
//   console.log('A');
//   resolve();
// })
//
// let B = A.then(() => console.log('B'));
// let C = A.then(() => console.log('C'));
//
//
// B.then(() => console.log('D'));
// B.then(() => console.log('E'));
// C.then(() => console.log('F'));
// C.then(() => console.log('G'));

// Promise all()
// let p2 = Promise.all([
//   Promise.resolve(),
//   Promise.reject(),
//   Promise.resolve()
// ])
//
// setTimeout(console.log, 0, p2);
//
// let p3 = Promise.all([
//   Promise.resolve(3),
//   Promise.resolve(),
//   Promise.resolve(4)
// ]);
//
// p3.then((values) => setTimeout(console.log, 0, values));

// let p = Promise.all([
//   Promise.reject(3),
//   new Promise((resolve, reject) => setTimeout(reject, 1000))
// ]);
//
// p.catch((reason) => setTimeout(console.log,0,reason));


// Promise race()
// let p1 = Promise.race([
//   Promise.resolve(3),
//   new Promise((resolve, reject) => setTimeout(reject, 1000))
// ])
// setTimeout(console.log, 0,p1);
//
// let p2 = Promise.race([
//   Promise.reject(4),
//   new Promise((resolve, reject) => setTimeout(resolve, 1000))
// ])
// setTimeout(console.log, 0,p2);
//
// let p3 = Promise.race([
//   Promise.resolve(5),
//   Promise.resolve(6),
//   Promise.resolve(7)
// ]);
// setTimeout(console.log, 0, p3);
