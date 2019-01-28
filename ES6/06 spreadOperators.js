let arr = [3, 5, 1];
console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

//We also can pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) ); // 8

//We can even combine the spread operator with normal values:

let arr11 = [1, -2, 3, 4];
let arr21 = [8, 3, -8, 1];
console.log( Math.max(1, ...arr11, 2, ...arr21, 25) ); // 25

let merged = [0, ...arr11, 2, ...arr21];
console.log(merged); 

let str = "Hello";
console.log( [...str] ); // H,e,l,l,o

//spread ...arrayName
spread_sum = (v1, v2, v3) => v1+v2+v3;
var array = [1,2,3,4]
console.log(spread_sum(...array))
var array = [1,2] // unavailable parameters will be considered as "undefined"
console.log(spread_sum(...array))

function report(...num){
    return num.reduce(sum,0) }
function sum(acc, value){
    return acc + value }
  
console.log(report(1,2,3)) 
console.log(report(1,2,3,4,5)) 
console.log(report(1,2,3,4)) 
     