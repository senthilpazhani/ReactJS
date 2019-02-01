// Creating an Array
var array_name = [10, 20,];       
// Putting a comma after the last element (like "BMW",)  is inconsistent across browsers.
// IE 8 and earlier will fail.

var cars = ["Saab", "Volvo", "BMW"];
var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars); //Saab,Volvo,BMW
// Array: 
var person = ["John", "Doe", 46];
// Object:
var person = {firstName:"John", lastName:"Doe", age:46};
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = cars;

// Array Properties and Methods
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays
var last = fruits[fruits.length - 1]; 

// =================
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];
text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// =============
fruits.push("Lemon");    // adds a new element (Lemon) to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits
// Adding elements with high indexes can create undefined "holes" in an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits
// Banana Orange Apple Mango undefined undefined Lemon

// Avoid new Array()
// There is no need to use the JavaScript's built-in array constructor new Array().
var points = new Array();     // Bad
var points = [];              // Good 
var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good

var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
var points = new Array(40);  // Creates an array with 40 undefined elements !!!!!

typeof fruits;    // returns object 
Array.isArray(fruits);   // returns true

// The problem with this solution is that ECMAScript 5 is not supported in older browsers.
// To solve this problem you can create your own isArray() function:
function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
}

// The "instanceof" operator returns true if an object is created by a given constructor:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array;   // returns true

// Arrays to Strings
fruits.toString(); // Banana,Orange,Apple,Mango
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); // Banana * Orange * Apple * Mango
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();// Removes the last element ("Mango") from fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";        // Changes the first element of fruits to "Kiwi"
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // Changes the first element in fruits to undefined
// Using delete may leave undefined holes in the array. Use pop() or shift() instead.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// New Array:
// Banana,Orange,Lemon,Kiwi,Apple,Mango
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi

var removed = fruits.splice(2, 2, "Lemon", "Kiwi");
// Removed Items: Apple,Mango
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Removes the first element of fruits
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
var arr1 = ["Cecilie", "Lone"];
var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
// Cecilie,Lone,Emil,Tobias,Linus
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
document.getElementById("demo").innerHTML = fruits + "<br><br>" + citrus;
// Orange,Lemon,Apple,Mango
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("demo").innerHTML = fruits;
fruits.sort();        // Sorts the elements of fruits
fruits.reverse();     // Then reverse the order of the elements

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

Math.max.apply(null, [1, 2, 3])// is equivalent to Math.max(1, 2, 3).
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
  var len = arr.length
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
  	max = arr[len];
    }
  }
  return max;
}

function myArrayMin(arr) {
  var len = arr.length
  var min = Infinity;
  while (len--) {
    if (arr[len] < min) {
  	min = arr[len];
    }
  }
  return min;
}

// Sorting Object Arrays
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

// Even if objects have properties of different data types, the sort() method can be used to sort the array.
// The solution is to write a compare function to compare the property values:
cars.sort(function(a, b){return a.year - b.year});
// Comparing string properties is a little more complex:
cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

// Array Iteration Methods
Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.
// Example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}

// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>"; 
}

// Array.map()

// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
}

// Array.filter()

// The filter() method creates a new array with array elements that passes a test.
// This example creates a new array from elements with a value larger than 18:
// Example
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}

// Array.reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.
// This example finds the sum of all numbers in an array:
// Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
}

// The total (the initial value / previously returned value)
// The reduce() method can accept an initial value:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);
function myFunction(total, value) {
  return total + value;
}

// Array.reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
// The reduceRight() method does not reduce the original array.
// This example finds the sum of all numbers in an array:
// Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// Array.every()
// The every() method check if all array values pass a test.
// This example check if all array values are larger than 18:
// Example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18; //All over 18 is false

// The some() method check if some array values pass a test.
// This example check if some array values are larger than 18:
// Example
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;  //Some over 18 is true

// Array.indexOf()
// The indexOf() method searches an array for an element value and returns its position.
// Note: The first item has position 0, the second item has position 1, and so on.
// Example
// Search an array for the item "Apple":
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
// Apple is found in position 1
array.indexOf(item, start)

// item
// Required. The item to search for.
// start
// Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence
// Array.lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but searches from the end of the array.
// Example
// Search an array for the item "Apple":
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
array.lastIndexOf(item, start)

// item
// Required. The item to search for
// start
// Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
// Array.find()
// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:
// Example
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
 
function myFunction(value, index, array) {
  return value > 18;
}

// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 18:
// Example
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);
 
function myFunction(value, index, array) {
  return value > 18;
}
 


