//Map
//Maps are a store for key / value pairs
//Key and value could be a primitives or object references.
//Key should be unique

//Creating Map
let map = new Map();
let val2 = 'val2', val3 = {key: 'value'};

//To add or modify a pair,
map.set(0, 'val1');
map.set('1', val2);
map.set({ key: 2 }, val3);
console.log(map); // Map {0 => 'val1', '1' => 'val2', Object {key: 2} => Object {key: 'value'}}

//To get a value,
console.log(map.get(0));

//To test for key, 
console.log(map.has(0));

//To delete a pair, 
//map.delete(0) ;

//To get the size of map,
console.log(map.size)

//To delete all pairs, 
//map.clear() 

//To iterate over map using for..of,
for (const item of map){
console.log(item);		}

//keys method returns iterator over keys 
for (const item of map.keys())
{
        console.log(item);		
}
//values method returns iterator over values 
for (const item of map.values())
{
        console.log(item);		
}
//entries method returns iterator over array of [key, value] arrays 
for (const item of map.entries())
{
        console.log(item);		
}

//Iterating with its built-in forEach()
map.forEach((k,v)=>console.log(`key: ${k}, value:${v}`))
map.forEach((k) => {console.log(k);});

//Map : let newMap = new Map([...map].map(  ([key, value]) => [new-key-expr, new-value-expr]));
//Filter : let newMap = new Map([...map].filter(  ([key, value]) => boolean-expr]));

/*Set
Set hold collections of unique values 

Values can be any type including primitives or object references
*/
//Creating Set, 
let set = new Set() 
let name = 'ES6';

//To add a value,
set.add(1);
set.add('1');
set.add(name);
set.add({ key: 'value' });

//To show all values,
console.log(set); // Set(4) {1, "1", "ES6", {…}}
set.forEach((v)=>console.log(`Value is: ${v}`))

/*
Map : let newSet = new Set([...set].map(elem => some-code));

Filter : let newSet = new Set([...set].filter(elem => some-code));

Union : let union = new Set([...set1, ...set2]);
 
Intersection : let intersection = new Set([...set1].filter(elem => set2.has(elem)));

Difference : let union = new Set([...set1].filter(elem => !set2.has(elem)));

Remove duplicates from an array : let newArr = [...new Set(arr)];

*/
