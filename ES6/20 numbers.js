// Number
// .isFinite()
// .isNaN() - better than isNaN()
// .isInteger()
// .EPSILON - smallest values such that 1 + Number.EPSILON > 1
// String
// .repeat(n) - copy current string n times
// .startsWith(str)
// .endsWith(str)
// .contains(str)
// .toArray() - same as .split('')

var print=(x)=>console.log(x)

//NaN - Not a Number
//==================
var x = 100 / "Apple";  // x will be NaN (Not a Number) 
var x = 100 / "Apple";
print(isNaN(x)); // returns true because x is Not a Number

//NaN is a number: typeof NaN returns number:
print(typeof NaN); 	       // returns "number"


// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
// =============
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity
print(x)
print(y);
// Infinity is a number: typeof Infinity returns number.
typeof Infinity;     // returns "number"

// Hexadecimal
//=============
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
var x = 0xFF;        // x will be 255

// Numbers Can be Objects
var x = 123;
var y = new Number(123);

// typeof x returns number
// typeof y returns object
// Do not create Number objects. It slows down execution speed.
// The new keyword complicates the code. This can produce some unexpected results:
var x = 500;             
var y = new Number(500);
// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types


// Real Life Objects, Properties, and Methods
var car = {type:"Fiat", model:"500", color:"white"};
// You can access object properties in two ways:
// objectName.propertyName
// or
// objectName["propertyName"]
// A method is a function stored as a property.
// Example
var person = {
  firstName: "John",
  lastName : "Doe",
  id   	: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// If you access a method without the () parentheses, it will return the function definition:
name = person.fullName; // function() { return this.firstName + " " + this.lastName; }
print(name)
print(person.fullName())


