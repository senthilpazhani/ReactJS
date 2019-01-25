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
console.log(makeDate(undefined,undefined,2019)); 