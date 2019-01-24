//Block Scope Variables

/*
* "let" has block scope
* Not hoisted to beginning of enclosing block, so references before declaration are errors
* Most uses of "var" can be replace with "let" (not if they depend on hoisting)
* When a "let" variable is accessed out of its scope, a ReferenceError is thrown with message "name is not defined"
* "let" can not be declared more than once - Uncaught SyntaxError: Identifier 'x' has already been declared
*/

let divider = (num = 3)=>console.log("-".repeat(50));

var x = 0;
{
    var x =2; 
    console.log(x);
}
console.log(x);
divider();

var x1 = 10;
{
    let x1 =12;
    console.log(x1);
}
console.log(x1);
divider();

let x2 = 20;
{
    let x2 =22;
    console.log(x2);
}
console.log(x2);
divider();

let x3 = 30;
{
    //var x3 =33; //Uncaught SyntaxError: Identifier 'x3' has already been declared
    //console.log(x3);
}
console.log(x3);
divider();

let x4 = 40;
{
    let _x4 =44;        
}
//console.log(_x4); //Uncaught ReferenceError: x41 is not defined
console.log(x4);
divider();

//Block Function
outerFn=()=>console.log(`I'm in Outer Func`);
{
    innerFn=()=>console.log(`I'm in Inner Func`);
    outerFn();
    innerFn();
}
outerFn();
innerFn();
divider();

function outer(){
    console.log(`I'm in Outer Func`);}
{
    function inner(){
        console.log(`I'm in Inner Func`);}
    outer();
    inner();
}
outer();
inner();
divider(); 


