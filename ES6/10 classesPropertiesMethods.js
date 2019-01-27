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
