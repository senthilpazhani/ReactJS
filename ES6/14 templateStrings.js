var name = 'ES6';
console.log(`Hello, ${name}!`);
var a = 10, b = 20;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);
console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);

function fn() { return "In ES6"; }
console.log(`Working ${fn()}`);

fn=()=>"In ES6";
console.log(`Working ${fn()}`);
console.log(`Working ${()=>{return "In ES6"}}`);

console.log(`string text line 1
string text line 2`);

let you = 'Mark';
let adjective = 'fresh';

fn = (strings=[], ...values) => {
    let result = strings[0];
    values.forEach((value, index) => result += value.toUpperCase() + strings[index + 1]);
    return result;
}
console.log(fn`Hello ${you}! You're looking ${adjective} today!`); // Hello MARK! You're looking FRESH today! 	
console.log(fn(["Hello ", "! You're looking ", " today!"], you, adjective)); // Hello MARK! You're looking FRESH today!


let hr=()=>{ return '--------------------------------'};
console.log(`Blank Function ${()=>hr()}`); //will return Blank Function ()=>hr()
//Fix
myTag = (str=[],func) => {  return str[0]+func()};  // string and remaining inputs
var newString = myTag `End ${()=>hr()} Here`;
console.log(newString);

myTag = (str=[],...func) => { 
    let result = str[0];
    func.forEach((fn, index) => result += fn() + str[index + 1]);
    return result;  // string and remaining inputs
}
var newString = myTag `End ${()=>hr()} Here  ${()=>hr()} Here  ${()=>hr()} Here`;
console.log(newString);