//reduce
/* arr.reduce(callback[, initialValue])
The reducer function takes four arguments:
Accumulator (acc)
Current Value (cur)
Current Index (idx)
Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.
*/
let array = [1, 2, 3, 4];
let sum = (acc, value) => acc + value;
let product = (acc, value) => acc * value;
let init = 2;

console.log('Sum of', array, 'is', array.reduce(sum, init));

console.log(`Product is ${array.reduce( (acc,value) => acc+value)}`); //init  value is optional
//If initialValue isn't provided, reduce() will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.

console.log(`Product is ${array.reduce( (acc,value) => acc*value, init)}`);

let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
let maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
console.log([ { x: 22 }, { x: 42 } ].reduce( maxCallback )); // 42 typeof  number
console.log([ { x: 22 }            ].reduce( maxCallback )); // { x: 22 } typeof  object
// /console.log([                      ].reduce( maxCallback )); // Uncaught TypeError: Reduce of empty array with no initial value

// map/reduce; better solution, also works for empty or larger arrays
console.log([ { x: 22 }, { x: 42 } ].map( el => el.x ).reduce( maxCallback2, -Infinity ));

//How reduce() works
console.log( [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue, 1) );

//Sum of values in an object array
let initialValue = 4;
let sumObject = [{x: 1,y:4}, {x:2,y:4}, {x:3,y:4}].reduce( (accumulator, currentValue) => accumulator + currentValue.x,initialValue);
console.log(sumObject);

//Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5],[5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue),[-1]);
console.log(flattened);

//Counting instances of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let searchStr="Alice";
let countInstance = names.reduce( (acc,currVal) => searchStr===currVal ? ++acc:acc,0)
console.log(countInstance);
let countInstance1 = names.reduce( (acc,currVal) => searchStr===currVal ? acc+' '+currVal:acc,[])
console.log(countInstance1);

//Counting instances of values in each object
let countInstanceEach = names.reduce( (acc,currVal) => {
    currVal in acc ? acc[currVal]++:acc[currVal]=1;
    return acc;
},{} );
console.log(countInstanceEach);

//Grouping objects by a property
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
/* function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }  
  let groupedPeople = groupBy(people, 'age');
  console.log(groupedPeople);
*/
var str='age';
let groupedPeople1 = people.reduce( (str => (acc,currVal) => {
    var key = currVal[str];
    console.log(currVal)
    if(!acc[key]) acc[key] = []
    acc[key].push(currVal);
    return acc;
})(str),{} );
console.log(groupedPeople1);

//Bonding arrays contained in an array of objects using the spread operator and initialValue
var friends = [
    {name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21}, 
    {name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26},
    {name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18}
];
// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.books], ['Alphabet','Bible']);
console.log('List of books with duplication : ',allbooks);
console.log('List of books without duplication : ',new Set(allbooks));

//Remove duplicate items in array
var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
var myOrderedArray = myArray.reduce( (accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) accumulator.push(currentValue);
  return accumulator
}, []);
console.log(myOrderedArray);

//Function composition enabling piping
// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;
// Function composition enabling pipe functionality
//const pipe = (...functions) => input => functions.reduce( (acc, fn) => fn(acc), input );
const pipe = (...functions) => x => functions.reduce( (acc, fn) => fn(acc), x);
// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6)); // 36
console.log(multiply9(9)); // 81
console.log(multiply16(16)); // 256
console.log(multiply24(10)); // 240

//Running Promises in Sequence
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
    return arr.reduce(
      (promiseChain, currentFunction) => promiseChain.then(currentFunction),
      Promise.resolve(input)
    );
  }
  
  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 5);
    });
  }
  
  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 2);
    });
  }
  
  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
   return a * 3;
  }
  
  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 4);
    });
  }
  
  const promiseArr = [p1, p2, f3, p4];
  runPromiseInSequence(promiseArr, 10)
    .then(console.log);   // 1200
  