// function that call itself
// fibonacci
function fibonacci(n){
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}
// factorial
function factorial(n){
  return n <= 1 ? 1 : n * factorial(n-1);
}
console.log(fibonacci(7));
