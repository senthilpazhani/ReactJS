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


var f = function(one, two, three){console.log('Printing ',one,two,three)}
var a = [1, 2, 3];
f.apply(null,a);

var f = function(one, two, three){ console.log(one + two + three);}
var a = [1,2,3];
f(...a);

//New way of syntax
var f= function(a,b,c,d,e,f){};
var a = [1,2];
f(-1,...a,3,...[-3, -4]);

     
var from = [1,2];
//wants: [0,1,2,3] ie [0, from, 3]
//With es5
var a = [0,3]
a.unshift(0);
a.push(3);
// and splice is here also
//With es6
var total = [0, ...from,3];
console.log(total)
//Array like
//> Object with a length property
//> Can access elements with[]
var fake = {
 0 : 'I\'m',
 1: 'not',
 2: 'an array',
 length: 3
};
//Result
console.log(fake)  //{0: "I'm", 1: "not", 2: "an array", length: 3}


//Array like in the wild
//> function’s arguments
//> all nodeList from the DOM

//Before:
var nodes = document.querySelectorAll('.md'); 
var nodes = [].slice.call(nodes);
console.log(nodes)
//And now:
nodes = [...nodes];
console.log(nodes)

//Array Conversion
console.log(Array.from(document.querySelectorAll('div')));

//Apply
/*Function.prototype.apply
fun.apply(thisArg, [argsArray])
*/
function f(){
  for(let i=0;i<arguments.length;++i)
    console.log(arguments[i]);
}
f.apply(this,['one',2,'foo']);

//Push Multiple Elements:
var a = [];
var toPush = [1,2,3];
a.push.apply(a, toPush);
//And now
a.push(...toPush);



//Array comprehensions
var  a = [ {color:'red'}, {color:'blue'} ];
//[x.color for(var x of a) {if ('blue' === x.color) console.log(x.color)}]
// [ 'blue' ]

