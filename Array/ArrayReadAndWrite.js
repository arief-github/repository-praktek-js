let a = ["world"];
let value = a[0]; //read element 0
a[1] = 3.14; //write element 1
let  i = 2;
a[i] = 3; //write element 2
a[i + 1] = "hello"; //write element 3
a[a[i]] = a[0]; //read elements 0 and 2, write element 3
a[1] = a[0]; // read elements 1 , write element 1
console.log(a);
