let today = new Date(); 
function makeDate(day=today.getDate(), month = today.getMonth(), year = today.getFullYear())
{  console.log(year, month, day);
    return new Date(year, month, day).toDateString(); 
} 
console.log(makeDate(18, 4, 2019)); 
console.log(makeDate(18, 4)); 
console.log(makeDate(16)); 
console.log(makeDate()); 
console.log(makeDate(null,5,2019)); 
//undefined will trigger the evaluation of the default value, not null
console.log(makeDate(undefined,undefined,2019)); 

//Arity
//Number of parameters without default value
console.log((function(a,b,c){}).length) // 3
console.log((function(a=10){}).length) // 0
console.log((function(a,b,c=0){}).length) // 2
console.log((function(a=0,b,c){}).length) // 0
