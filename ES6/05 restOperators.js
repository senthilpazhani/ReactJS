/*A function can be called with any number of arguments, no matter how it is defined
It is used to bind the first few function parameters to variables, and others to single variables as an array
Gather variable number of arguments after named parameters into an array 
If no corresponding arguments are supplied, value is an empty array, not undefined 
The rest parameters must be at the end
Removes need to use arguments object
*/

function report(firstName, lastName, ...colors) 
{  
    let phrase = colors.length === 0 ? 'no colors' : 
                colors.length === 1 ? 'the color ' + colors: 'the colors ' + colors.join(' and '); 
    console.log(firstName+' '+lastName+' likes '+phrase + '.'); 
} 
report('Amit', 'Gune'); 
report('Mohit', 'Gupta', 'yellow'); 
report('Shivani', 'Sharma', 'pink', 'blue'); 
report('Neetu', 'Srivastava', 'pink', 'blue','green');

function sumAll(...args) 
{ 
    let sum = 0;
    for (let arg of args) sum += arg; 
    return sum;
}

console.log( sumAll(1) );
console.log( sumAll(1, 2) );
console.log( sumAll(1, 2, 3) );