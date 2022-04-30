/* eslint-disable no-param-reassign */
// const jsonobj = '{"test" : "value1", "test2" : 3.44, "test3" : 0}';
// const obj = JSON.parse(jsonobj, (key, value) => {
//   if (typeof value === 'number') {
//     if (value === 0) {
//       value = false;
//     } else if (value === 1) {
//       value = true;
//     }
//   }
//   return value;
// });

// false
// console.log(obj.test3);


// JSON.parse capability to transform the numeric values to their boolean counterparts
const jsonobj = '{"test1":1, "test2": 3.44, "test3":0}';
const obj = JSON.parse(jsonobj, (key, value) => {
  if(typeof value === 'number') {
    if(value === 0) {
      value = false;
    } else if(value === 1) {
      value = true;
    }
  }
  return value;
})


console.log(obj.test1);
