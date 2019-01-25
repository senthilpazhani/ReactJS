//some
//arr.some(callback(element[, index[, array]])[, thisArg])
//returns : true if the callback function returns a truthy value for any array element; otherwise, false.

let people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
]
 
let thereAreTeenager = people.some(person => person.age > 10 && person.age < 20)
console.log('There are teenager: ', thereAreTeenager)

//Checking whether a value exists in an array
let fruits = ['apple', 'banana', 'mango', 'guava'];
let search = 'apple';
console.log( fruits.some( (search => fruit => {return fruit===search} )(search) ) ) //===search

//Testing every object of an array for a value
console.log([{a:1, b:2, c:3, d:4}, {a:1, x:2, y:3, z:4}, {a:1, x:2, y:3, z:4}].some(obj => obj.a === 1 )); //true
console.log([{a:1, b:2, c:3, d:4}, {a:1, x:2, y:3, z:4}, {a:2, x:2, y:3, z:4}].some(obj => obj.d === 4)); //true


