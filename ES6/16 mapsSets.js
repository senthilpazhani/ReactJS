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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Map : let newMap = new Map([...map].map(  ([key, value]) => [new-key-expr, new-value-expr]));
//Filter : let newMap = new Map([...map].filter(  ([key, value]) => boolean-expr]));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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


let set = new Set()
let name ="PSK"

set.add(1);
set.add("1").add("2").add("3").add("3").add("4");
console.log(set.has('4'));
set.add(name);
set.add({key:"value"});
for(const x of set){console.log(x);}
console.log("==============")
console.log(set.size);
console.log("==============*")

set.delete(name);
for(const x of set){console.log(x);}
console.log("======delete========")
console.log(set.size);
console.log("==============")

set.clear();
for(const x of set){console.log(x);}
console.log(set.size);
console.log("==============")

let arr=[1,2,3,4,3,4];
console.log(arr);
let setArray = new Set(arr);
console.log(setArray);
console.log(setArray.values());
console.log("==============")

let obj = {name:"psk",profile:'AM'}
let arr12 = [
    {name:"psk",profile:'AM'},
    {name:"psk",profile:'AM'},
    {name:"psk",profile:'AM'},
    obj,
    obj
]
//console.log(arr12)
let setObject = new Set(arr12)

for (const x of setObject.values()){
    console.log(x);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Map : let newSet = new Set([...set].map(elem => some-code));

Filter : let newSet = new Set([...set].filter(elem => some-code));

Union : let union = new Set([...set1, ...set2]);
 
Intersection : let intersection = new Set([...set1].filter(elem => set2.has(elem)));

Difference : let union = new Set([...set1].filter(elem => !set2.has(elem)));

Remove duplicates from an array : let newArr = [...new Set(arr)];

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write a program to create a SET with the existing set of values in an array
console.log("Write a program to create a SET with the existing set of values in an array");
let arrExists = ["a","b"];
let setArr = new Set(arrExists);
//  Write a program to iterate through all elements in a SET.
console.log("Write a program to iterate through all elements in a SET.");
for (const x of setArr.values()){  console.log(x); }
//  Write a program to get the number of elements in a SET.
console.log("Write a program to get the number of elements in a SET.");
console.log(`Size : ${setArr.size}`);
//  Write a program to empty a SET
console.log("Write a program to empty a SET");
setArr.clear();
console.log(`Size : ${setArr.size}`);
//  Write a program to test a SET is empty or not.
console.log("Write a program to test a SET is empty or not.");
console.log(setArr.size > 0 ? 'Not Empty':'Empty');
//  Write a program to clone a SET to another SET.
console.log("Write a program to clone a SET to another SET.");
setArr.add('1');
let setArr1 = new Set(setArr);
console.log("size:",setArr.size);
console.log("size:",setArr1.size);
//  Write a program to convert a SET to an array.
console.log("Write a program to convert a SET to an array.");
let arrExists3 = ["a","b","c","d","e"];
let arrExists2 = ["a","b","c"];
let setArr2 = new Set(arrExists2);
let setArr3 = new Set(arrExists3);
let newArray = [...setArr3];
console.log("Array : ", newArray);
//  Write a program to check whether all elements in one SET is present in another or not.
console.log("Write a program to check whether all elements in one SET is present in another or not.");
let setIntesect = new Set([...setArr2].filter(elem=>setArr3.has(elem)));
console.log ("Intersect :",setIntesect);
let setDiff = new Set([...setArr3].filter(elem=>!setArr2.has(elem)));
console.log ("Difference : ", setDiff);
console.log ("Remove Duplication");
dupArr = ["1","2","3","3","3"];
console.log (`Duplicated Array ${dupArr}`);
let withoutDuplicateArr = [...new Set(dupArr)];
console.log (`Clean Array ${withoutDuplicateArr}`);

//=====================================

console.log ("*****Template String Issue with SET class*****");
console.log (`Difference : ${setDiff}`);

myTag = (lit=[],func) => { return lit[0]+func;} 
var newString = myTag `Difference ${setDiff}`;
console.log("Tagged template String : ", newString);

//=====================================

let map = new Map();
let val2 = 'val1', val3 = {key:'value'};

map.set(0,'val1');
map.set("1",val2);
map.set(2,val3);
map.set({key:3},val3);
console.log('=================');
for(let item of map){
    console.log(item);
}
console.log('=================');
for(let item of map.keys()){
    console.log(item);
}
console.log('=================');
console.log( map.values());
console.log('=================');
for(let item of map.values()){
    console.log(item);
}
console.log('=========Entries ========');
for(const item of map.entries()){
    console.log(item);
}
console.log('========Object=========');
let map1 = new Map();
map1.set(1,{name:'1',prof:'2'});
for(const item of map1.entries()){
    console.log(item);
}
console.log('=================');
map.clear();
map.set('a','A')
map.set('b','B')
map.forEach((v,k)=>{console.log(k,v)});
map.forEach((k,v)=>{console.log(k,v)});
//  Write a program to create an empty Map and then after add three employees object with 1,2,3 as their key.
let stuMap = new Map();
stuMap.set(1,{name:'psk',dept:'finance'});
stuMap.set(2,{name:'Senthil',dept:'Accounts'});
stuMap.set(3,{name:'SenthilKumar',dept:'Production'});
//  Write a program to count the number of key-value (size) mappings in a map.
console.log(stuMap.size);
//  Write a program to copy all of the mappings from the specified map to another map.
let stuMap1 = new Map(stuMap);
console.log(stuMap1.size);
//  Write a program to remove all of the mappings from a map.
stuMap1.clear();
console.log(stuMap1.size);
//  Write a program to check whether a map contains key-value mappings (empty) or not.
console.log(stuMap1.size);
//  Write a program to test if a map contains a mapping for the specified key.
console.log(stuMap.get(1));
//  Write a Java program to get the value of a specified key in a map.
console.log('Write a Java program to get the value of a specified key in a map.');
let getVal=(x)=>stuMap.get(x);
console.log(getVal(2));
//  Write a program to get a list of the keys contained in the map.
for(const x of stuMap.keys()){
    console.log(x); }
//  Write a program to get a list of the values contained in the map
for(const x of stuMap.values()){
    console.log(x); }

stuMap.delete(1);
console.log('=====Delete list======')
for(const x of stuMap.values()){
    console.log(x); }
// WeakMap and WeakSet


let wk = new WeakMap();
wk.set(obj,12);
console.log(wk.get(obj));
obj=null;
console.log(wk.get(obj));
console.log('===========')
let str = new Map();
str.set(obj,12);
console.log(str.get(obj));
obj=null;
console.log(str.get(obj));


function * generator(){
    console.log("first");
    yield 'first';
    console.log("second");
    yield 'second';
}

var gen = generator();
var objgen = gen.next();
console.log(objgen);
console.log(gen.next());
console.log(gen.next());

console.log('===========')


fun = (num)=>num*num; 
function * genf(){
    console.log('print prod : 12 ');
    var num1 = yield fun(12);
    console.log('print prod ',num1);
    yield fun(num1)
}

var gen1 = genf();
//console.log(fun(12));
console.log(ss = gen1.next().value);
console.log(gen1.next(ss));
console.log(gen1.next());

console.log('===========')

function * genfun(){
    yield 'a';
    return 'b';
    yield 'c';
}
var genfun1 = genfun();
console.log(genfun1.next());
console.log(genfun1.next());
console.log(genfun1.next());
for(const x of genfun()){
    console.log('im iterating ',x)
}
console.log('===========')

function * genfun2(){
    console.log('What is your favorite Color?')
    var color = yield '';

    if (color !='yellow'){return 'Invalid User'}
    console.log('What is your first School?')
    var school = yield color;

    if (school !='myschool'){return 'Invalid User'}
    console.log('What is your sports?')

    var sport = yield school;
    if (sport!='cricket'){return 'Invalid User'} 

    return sport + ' Your are welcome !!'
}
var genfun2 = genfun2();
genfun2.next().value;
console.log(genfun2.next('yellow').value);
console.log(genfun2.next('myschool').value);
console.log(genfun2.next('cricket').value);
//console.log(genfun2.next());

function * genfun3(){
    console.log('Q2 What is your favorite color?')
    var color = yield '';
    if (color !='blue'){return 'Invalid User'}
    return ' Your are welcome !!'

}
var genfun3 = genfun3();
genfun3.next();
console.log(genfun3.next('blue').value);
 
