//find
/**
 * The find() method returns the value of the first element in the array that satisfies the provided testing function.
 * Otherwise undefined is returned.
 */
let divider = (str='-',num=50) => console.log(str.repeat(num));

let people = [
        {name: 'Jack', age: 50},
        {name: 'Michael', age: 9}, 
        {name: 'John', age: 40}, 
        {name: 'Ann', age: 19}, 
        {name: 'Elisabeth', age: 16}
    ]
 
var everyoneIsTeenager = people.find(person => person.age >10 && person.age<20 )
console.log('Everyone is teenager: ', everyoneIsTeenager)	
divider()

//Find an object in an array by one of its properties
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'apples', quantity: 2}
];
inventory.find(fruit => console.log(fruit.name === 'cherries')); 
divider()

console.log(inventory.find(fruit => fruit.name === 'cherries')); 
divider()

//Find a prime number in an array
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
        return false;
        }
    }
    return element > 1;
}
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
divider()

// Declare array with no element at index 2, 3 and 4
var array = [0,1,,,,5,6];
// Shows all indexes, not just those that have been assigned values
console.log("forEach")
array.forEach((value, index) => console.log('Visited index ' + index + ' with value ' + value) )
divider()
console.log("map")
array.map((value, index) => console.log('Visited index ' + index + ' with value ' + value) )
divider()
console.log("find")
array.find((value, index) => console.log('Visited index ' + index + ' with value ' + value) )
divider()

  // Shows all indexes, including deleted
array.find(function(value, index) {    
    // Delete element 5 on first iteration
    if (index == 0) {
    console.log('Deleting array[5] with value ' + array[5]);
    delete array[5];
    }
    // Element 5 is still visited even though deleted
    console.log('Visited index ' + index + ' with value ' + value); 
});