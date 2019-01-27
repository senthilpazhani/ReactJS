//Shorthand for Initializing Properties

//ES5
getLaptop = (make, model, year) => {
    return {
        make: make,
        model: model,
        year: year
        }
}

getLaptop("Apple", "MacBook", "2015");// {make: "Apple", model: "MacBook", year: "2015"}

//ES6
getLaptop = (make, model, year) => {
    return {
        make,
        model,
        year
    }
}
getLaptop("Apple", "MacBook", "2015"); // {make: "Apple", model: "MacBook", year: "2015"}

let fruit = 'apple', number = 19; 
let obj = {fruit, color: 'green', number}; 
console.log(obj); // {fruit: 'apple', color: ‘green', number: 19}

//Shorthand for Defining Methods 
//ES5
getLaptop = (make, model, year) => {
    return {
        make: make,
        model: model,
        year: year,
        sayModel : function(){
            return model;
        }
    }
}   
console.log(getLaptop("Apple", "MacBook", "2015"));
console.log(getLaptop("Apple", "MacBook", "2015").sayModel());

//ES6
getLaptop = (make, model, year) => {
    return {
        make, 
        model, 
        year,
        sayModel(){
            return model;
        }
    }
}
console.log(getLaptop("Apple", "MacBook", "2015").sayModel()); //"MacBook"

//Computed Properties and Object Literals
var name = "make";
const laptop = {
    [name]: "Apple"
}
console.log(laptop.make);//"Apple“

var name = "make";
var i = 0;
const laptop1 = {
    [name + ++i]: "Apple",
    [name + ++i]: "Dell",
    [name + ++i]: "HP"
    }

console.log(laptop1.make1);//"Apple"
console.log(laptop1.make2);//"Dell"
console.log(laptop1.make3);//"HP"
