// Constand Declaration

//

let divider = (num = 3)=>console.log("-".repeat(50));

var fn = ()=>
{ var x = 1;
  let y = 2;
  const z = 3;
  {
      let x = 100;
      let y = 200;
      //z = 300; //Uncaught TypeError: Assignment to constant variable.
      const z = 300;
      console.log(`x in block scope is ${x}`)
      console.log(`y in block scope is ${y}`)
      console.log(`z in block scope is ${z}`)
  }  
  console.log(`x outside block scope is ${x}`)
  console.log(`y outside block scope is ${y}`)
  console.log(`z outside block scope is ${z}`)  
 // return (`z return outside block scope is ${z}`)

}
//console.log(fn); // prints the function statements
console.log(fn()); // If no return statement, it retuns "undefined"

divider();
fn(); // return statement is not required

Output:
x in block scope is 100
y in block scope is 200
z in block scope is 300
x outside block scope is 1
y outside block scope is 2
z outside block scope is 3
undefined
--------------------------------------------------
x in block scope is 100
y in block scope is 200
z in block scope is 300
x outside block scope is 1
y outside block scope is 2
z outside block scope is 3
undefined
