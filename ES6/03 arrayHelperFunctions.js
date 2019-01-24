let divider = (str='-',num = 50)=>console.log(str.repeat(num));

//forEach
var colors = ['red','blue','green','pink'];
printforEach=(val)=>console.log(val);
colors.forEach(printforEach); 
divider(); 
//colors.forEach(printforEach=(val)=>console.log(val)); 
colors.forEach((val)=>console.log(val));
divider(); 
colors.forEach((val,index)=>console.log(val,index));
divider('*'); 
//map
var colors = ['red','blue','green','pink'];
printmap=(val)=>{return val.toUpperCase();}
console.log(colors.map(printmap)); 
divider(); 
console.log(colors.map((val)=>{return val.toLowerCase();}));
//passing value to "map"
console.log(colors.map((val,index,array,mystr='my colors' )=>{return `index[${index}] is ${val} in array ${array} ${mystr}`;}));
divider('*'); 

//filter
//find
//every
//some
//reduce
