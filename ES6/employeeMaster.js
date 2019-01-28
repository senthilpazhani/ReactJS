
//find
let employees = [
    {name:'PSK',salary:80000, dept:'PreSales', age:'20'},
    {name:'senthil',salary:60000, dept:'Mkt', age:'24'},
    {name:'Psenthil',salary:40001, dept:'Acc', age:'30'},
]
  
function addSalary(a)
{return {name:a.name,salary:a.salary+10000,dept:a.dept,empage:a.age};} 

function sal_check(employees)
{return employees.salary > 50000}

function emp_filter(employees)
{return employees.salary > 60000}

console.log('Employee List');
employees.forEach(function(a){console.log(a);})
console.log('=================================');

let mod_employees = employees.map(addSalary)
console.log('Employee List - updated salary');

mod_employees.forEach(function(a){console.log(a);})
console.log('=================================');
console.log('Company Status');
console.log(mod_employees.every(sal_check)?"best":"no best")
console.log('=================================');

let filtered_employees = mod_employees.filter(emp_filter)
console.log('Employee List - > 60k');
filtered_employees.forEach(function(a){console.log(a);})
console.log('=================================');

function avgSalary(acc, value){
    return acc + value.salary  }

let averageSalary = mod_employees.reduce(avgSalary, 0)

console.log(averageSalary/mod_employees.length);
console.log('=================================');

var prop1 = "name"
var prop2 = "salary"
mod_employees.forEach(function(a){
    var {[prop1]:fname,[prop2]:modsalary} = a;console.log(fname);
    console.log(modsalary);
})
console.log('=================================');

var prop1 = "name"
var prop2 = "salary"
var dept
mod_employees.forEach(function(a){
    ({[prop1]:fname,[prop2]:modsalary,dept} = a); 
})
console.log("outside : " + fname);
console.log("outside : " + modsalary);
console.log("outside : " + dept);
console.log('=================================');

var prop1 = "name"
var prop2 = "salary"
mod_employees.forEach(function(a){
    var {[prop1]:fname,[prop2]:modsalary,...resp} = a;
    console.log(fname);
    console.log(modsalary);console.log(resp);
})
