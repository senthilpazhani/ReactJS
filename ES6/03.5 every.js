// every
//arr.every(callback[, thisArg])
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//Note: This method returns true for any condition put on an empty array.

let divider = (str='-',num=50) => console.log(str.repeat(num));

let people = [
    {name: 'Jack', age: 50},
     {name: 'Michael', age: 9}, 
     {name: 'John', age: 40}, 
     {name: 'Ann', age: 19}, 
     {name: 'Elisabeth', age: 16}
]

let everyoneIsTeenager = people.every(person => person.age > 10 && person.age < 20)
console.log('Everyone is teenager: ', everyoneIsTeenager)
divider()

//Testing size of all array elements
console.log([12, 5, 8, 130, 44].every(num => num>10));    
console.log([12, 54, 18, 130, 44].every(num => (num>10)));
divider()

//Testing every object of an array for a value
console.log([{a:1, b:2, c:3, d:4}, {a:1, x:2, y:3, z:4}, {a:1, x:2, y:3, z:4}].every(obj => obj.a === 1 )); //true
console.log([{a:1, b:2, c:3, d:4}, {a:1, x:2, y:3, z:4}, {a:2, x:2, y:3, z:4}].every(obj => obj.a === 1)); //false
