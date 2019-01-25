let divider = (str='-',num = 50)=>console.log(str.repeat(num));

//forEach
/*
arr.forEach(callback[, thisArg]);
ParametersSection
callback : Function to execute for each element, taking three arguments:
    currentValue : The value of the current element being processed in the array.
    indexOptional : The index of the current element being processed in the array.
    arrayOptional : The array that forEach() is being applied to.
thisArg Optional : Value to use as this (i.e the reference Object) when executing callback.
Return valueSection : undefined.
*/
var colors = ['red','blue','green','pink'];
printforEach=(val)=>console.log(val);
colors.forEach(printforEach); 
divider(); 
//colors.forEach(printforEach=(val)=>console.log(val)); 
colors.forEach((val)=>console.log(val));
divider(); 
colors.forEach((val,index)=>console.log(val,index));

divider(); 
const items = ['item1', 'item2', 'item3'];
const copy = [];
items.forEach(function(item){
    copy.push(item);
});
console.table(copy);
divider(); 
//Using thisArg
function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function(array) {
    array.forEach(function(entry) { this.sum += entry; ++this.count; }, this);
    //array.forEach((entry)=>{ this.sum += entry;  ++this.count;});
    //If passing the function argument using an arrow function expression the thisArg parameter can be omitted as arrow functions lexically bind the this value
};
  
const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3 
console.log(obj.sum); // 16

divider(); 

var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
  console.log(word);  
  if (word === 'two') { words.shift();  }
});
divider('*'); 

//map
/*
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
*/
var colors = ['red','blue','green','pink'];
printmap=(val)=>{return val.toUpperCase();}
console.log(colors.map(printmap)); 
divider(); 

console.log(colors.map((val)=>{return val.toLowerCase();}));
//passing value to "map"
console.log(colors.map((val,index,array,mystr='my colors' )=>{return `index[${index}] is ${val} in array ${array} ${mystr}`;}));
divider();

//var squarefunc = (adjustment)=>{ return (x)=>{return x*x + adjustment;}; }
var squarefunc = (adjustment)=>{ return (x)=>x*x + adjustment; }
let values = [1,2,3,4];
let counter = 5;
console.log(values.map( squarefunc(counter)));
divider();

//using .bind()
//var squarefunc_simplified1 = (adjustment,x)=>{return x*x + adjustment;}; 
//var squarefunc_simplified1 = (adjustment,x)=>(x*x + adjustment);
var squarefunc_simplified1 = (adjustment,x)=>x*x + adjustment;
console.log(values.map( squarefunc_simplified1.bind(null,counter) ));
divider();

var squarefunc_simplified2 = (x,adjustment)=>{return x*x +  adjustment;}; 
console.log(values.map( x => squarefunc_simplified2(x,counter)  ));
divider();

function mapSingleFunc(values, adjustment) {
    return values.map((x) => {return x * x+ adjustment} );
    //return values.map((x) => (x * x)+ adjustment );
    //return values.map((adjustment => (x) => (x * x)+ adjustment)(adjustment));
  };
console.log(mapSingleFunc([1,2,3,4], counter)); 
divider();

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);
divider();

//Using map to reformat objects in an array
var kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
    });
console.log(reformattedArray);
divider();

//Using map generically
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0); 
});
console.log(a);
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
divider();

var elemsPrototype = document.querySelectorAll('select option:checked');
var valuesPrototype = Array.prototype.map.call(elemsPrototype, function(obj) {
  return obj.value;
});
divider();

//Tricky use case
function returnInt(element) {
    return parseInt(element, 10); //10 - which numerical system to use like, 0, 10, 16
}  
console.log(['1', '2', '3'].map(returnInt)) // [1, 2, 3]
console.log(['1', '2', '3'].map(str => parseInt(str)));
console.log(['1', '2', '3'].map(Number)) // [1, 2, 3]
console.log(['1.1', '2.2e2', '3e300'].map(Number)) // [1.1, 220, 3e+300]
divider('*'); 
//filter
//find
//every
//some
//reduce
