/**Destructuring Assignment enables to unpack values from arrays, or properties from objects, into distinct variables.
Variables are set from left to right. So the first variable gets the first item in the array, the second variable gets the second item in the array and so on.
*/
var [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(pronoun);//"I“

var introduction = ["Hello", "I" , "am", "Sarah"];
var [greeting, pronoun] = introduction;
console.log(greeting);//"Hello"
console.log(pronoun);//"I“

var greeting, pronoun;
[greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(pronoun);//"I"

var [greeting, , ,name] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(name);//"Sarah"

var [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(intro);//["I", "am", "Sarah"]

getArray = ()  => ["Hello", "I" , "am", "Sarah"] 
var[greeting,pronoun] = getArray();
console.log(greeting);//"Hello"
console.log(pronoun);//"I“

report = ([name, color]) => console.log(name + "'s favorite color is"+color + '.') //Destructuring in function
let data = ['Mark', 'yellow']; 
report(data); // Mark's favorite color is yellow. 

//with default value
var[greeting = "hi",name = "Sarah"] = ["hello"];
console.log(greeting);//"Hello"
console.log(name);//"Sarah“

var[greeting = "hi",name = "Sarah"] = [, "Sam"];
console.log(greeting);//“hi"
console.log(name);//"Sam"

//swapping 
var a = 3;
var b = 6;
[a,b] = [b,a];
console.log(a);//6
console.log(b);//3

//Object
var {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};
console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"  

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var {name, country, job} = person;
console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer“  

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var name, country, job;
({name, country, job} = person);
console.log(name);//"Sarah"
console.log(job);//"Developer"

//alias
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var {name, profile} = person;
console.log(name);//"Sarah"
console.log(profile);//undefined

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var {name:firstname,  job:profile} = person;
console.log(firstname);//"Sarah"
console.log(profile);//Developer

//using default values
var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var {name = "myName", friend = "Annie"} = person;
console.log(name);//"Sarah"
console.log(friend);//"Annie“

var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
var {name:firstname = "myName", friend:bestie = "Annie"} = person;
console.log(firstname);//"Sarah"
console.log(bestie);//"Annie"

//Computed Property Name or dynamic
var prop = "name";
var {[prop] : fname} = {name: "Sarah", country: "Nigeria", job: "Developer"};
console.log(fname);//"Sarah"

//Combining Arrays with Objects
var person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};
var {name:fname, friends: besties} = person;
console.log(fname);//"Sarah"
console.log(besties);//["Annie", "Becky"]

//Nesting in Object Destructuring
var person = {
    name: "Sarah",
    place: { country: "Nigeria",  city: "Lagos" }, 
    friends : ["Annie", "Becky"]
};
var { name:firstname, place:{ country:resi_coun,city},friends } = person;
console.log(resi_coun);//“Nigeria"
console.log(city);//“Lagos"
console.log(friends);// " Annie “, " Becky "

//Rest in Object Destructuring
var person = {name: "Sarah", country: "Nigeria", job: "Developer", friends: ["Annie", "Becky"]};
var {name, friends, ...others} = person;
console.log(name);//"Sarah"
console.log(friends);//["Annie", "Becky"]
console.log(others);// {country: "Nigeria", job: "Developer"}

//Object Destructuring with Functions
getPerson = () => { var person = {name: "Sarah", country: "Nigeria", job: "Developer", friends: ["Annie", "Becky"]};
  return person;
}
var {name, friends, ...others} = getPerson();
console.log(name);//"Sarah"
console.log(friends);//["Annie", "Becky"]
console.log(others);// {country: "Nigeria", job: "Developer"}


//argument of a function
recipes = [{name:'burger',calorie:215},{name:'pizza',calorie:266}];
recipes.forEach(function({name:name, calorie:calorie}){console.log(name,calorie);});

function printDeFun([name,color]){
  console.log ('Name : ' + name + ' Color : ' + color)
}
let res=['mark','color']
printDeFun(res)

// with rest
var prop1 = "name"
var prop2 = "salary"
let employees = [
    {name:'PSK',salary:80000, dept:'PreSales', age:'20'},
    {name:'senthil',salary:60000, dept:'Mkt', age:'24'},
    {name:'Psenthil',salary:40001, dept:'Acc', age:'30'},
]
employees.forEach(function(a){
    var {[prop1]:fname,[prop2]:modsalary,...resp} = a;
    console.log(fname);
    console.log(modsalary);
    console.log(resp);
})
