//A class definition can include Constructor and functions or methods but not data properties 
//An instance or object of the class can be created using the new keyword followed by the class name
//var obj = new class_name([ arguments ]) 
//Attributes and functions can be accessed through the object using ‘.’ dot notation (called as the period)	
//accessing a function obj.function_name()
//The static keyword can be applied to functions in a class. Static members are referenced by the class name
//static function_name(){}
//The instanceof operator is available in ES6 which returns true if the object belongs to the specified type
//var isObjOfClass= obj instanceof Class_name; 

class Shoe
{
	constructor(brand, model, size){
		this.brand = brand;
		this.model = model;
		this.size = size;
		Shoe.count += 1; //static object
	}
	static createdAny(){
		return Shoe.count > 0;
	}
	equals(obj){
		return obj instanceof Shoe &&
            this.brand === obj.brand &&
            this.model === obj.model &&
            this.size === obj.size;
    }
    toString(){
        return this.brand + ' ' + this.model +' in size ' + this.size;
    }
}

Shoe.count = 0;
let s1 = new Shoe('Mizuno', 'Precision 10', 13);
let s2 = new Shoe('Nike', 'Free 5', 12);
let s3 = new Shoe('Mizuno', 'Precision 10', 13);

console.log(s1.brand);
console.log(Shoe.count);
console.log('created any?', Shoe.createdAny()); // true
console.log('count =', Shoe.count); // 3
console.log('s2 = ' + s2); // Nike Free 5 in size 12
console.log('s1.equals(s2) =', s1.equals(s2)); // false
console.log('s3.equals(s3) =', s3.equals(s3)); // true 


console.log('===================================');

var pet = {
    name:['a','b','c'],
    owner:['psk'],
    description:function(){
        return this.name.map( (pet)=>{
            return `${this.owner} ${pet}`
        })
        //ES5        
        //return this.name.map(function(pet){ return `${this.owner} ES5 ${pet}` }.bind(this))        
        //return this.name.map(function(pet){ return `${this.owner} ES5 ${pet}` }.pet                
        //var self = this
        //return this.name.map(function(pet){ return `${self.owner} ES5 ${pet}` })       
    },
    individual_pet_object:()=>{
        return pet.name.map( (pet)=>({name:pet,owner:pet}))       
    },
    individual_pet_object_withfunction:function(){
        return this.name.map( (pet)=>({name:pet,owner:`${this.owner}`}))       
    }    
}

var arr =pet.description()
for(var x of arr){
    console.log(x)
}
var arr =pet.individual_pet_object()
for(var x of arr){
    console.log(x)
}
var arr =pet.individual_pet_object_withfunction()
for(var x of arr){
    console.log(x)
}

var empObj={name:'PSK',
    id:12,
    getName:()=>{return this.name}
}
console.log('Print Name : ',empObj.getName());

console.log('===================================');


class Account{
    constructor(account, openingBalance){
        this.account=account;
        this.balance=openingBalance;
    }
    deposit(amt){
        this.balance += amt;
    }
    getBalance(){
        return 'Balance: ' + this.balance;
    }
    get account(){
        return this._account;
    }
    set account(account){
        this._account = account;
    }
    toString(){
        return 'Account: ' + this.account + ' and Balance: ' + this.balance;
    }
}

var pskAcc = new Account('6098123',1000);
console.log(pskAcc.getBalance());
pskAcc.deposit(100000);
console.log(pskAcc.getBalance());
console.log(pskAcc.toString());
pskAcc.account = '1111111';
console.log(pskAcc.account);
pskAcc.balance = 506000;
console.log(pskAcc.balance);

console.log('===================================');

class SavingsAccount extends Account{
    constructor(account, openingBalance, interest){
        super(account, openingBalance);
        this.account=account;
        this.balance=openingBalance;
        this.interest = interest;        
    }
    toString(){
        return super.toString() + " Interest is " + this.interest;
    }
}

class CurrentAccount extends Account{
    constructor(account, openingBalance, overlimit){
        super(account, openingBalance);
        this.account=account;
        this.balance=openingBalance;
        this.overlimit = overlimit;        
    }
    toString(){
        return super.toString() + " Overlimit is " + this.overlimit;
    }
}
var pskSavingAcc = new SavingsAccount('6098123',1000,'10.99%');
var pskCurrAcc = new CurrentAccount('6098123',1000,150000);

console.log(pskSavingAcc.toString());
console.log(pskCurrAcc.toString());

function getLaptop(make,model,year){
    return{
        make,
        model,
        year,
        sayModel()
        {return model;}
    }
}
console.log(getLaptop('Yamaha','Z500','2017').sayModel());
