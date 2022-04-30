function sum(a){
  let total = 0;
  for(let element of a){
    if(typeof element !== 'number'){
      throw new TypeError("sum(): anda harus memasukkan angka");
    }
    total += element;
  }
  return total;
}

let result = sum([1,2,3]);
console.log(result);
