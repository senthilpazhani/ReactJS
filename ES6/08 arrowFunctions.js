var Person = () => {};
var func = x => x * x;                  
var func = (x, y) => { return x + y; };

var func = () => { Person: 1 }; // Calling func() returns undefined!	
//This is because the code inside braces ({}) is parsed as a sequence of statements (i.e. Person is treated like a 	label, not a key in an object literal).
//So, wrap the object literal in parentheses.

var func = () => ({Person: 1});
console.log(func())
console.log(func().Person)
