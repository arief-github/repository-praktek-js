// bentuk pertama
// function vectorAdd(v1,v2){
//   return [v1[0] + v2[0], v1[1] + v2[1]];
// }
//
// let result = vectorAdd([1,2], [3,4]);
// console.log(result);


// the code would be easier to understand if we destructured
// function vectorAdd([x1,y1],[x2,y2]){
//   return [x1+x2, y1+y2];
// }
// let result = vectorAdd([1,2],[3,4])
// console.log(result);


// object argument can form with destructured parameter
function vectorMultiply({x,y}, scalar){
  return {x: x*scalar, y: y*scalar};
}

console.log(vectorMultiply({x:1,y:2},2));
