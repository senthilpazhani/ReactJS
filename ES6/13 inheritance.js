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

class RunningShoe extends Shoe
{
  	constructor(brand, model, size, type){
        super(brand, model, size);
        this.type = type;
        this.miles = 0;
 	}
  	addMiles(miles){
        this.miles += miles;
  	}
  	shouldReplace(){
        return this.miles >= 500;
    }
    toString(){
        return super.toString()+' type ' + this.type;
    } 
}

let rs = new RunningShoe(  'Nike', 'Free Everyday', 13, 'lightweight trainer');
console.log(Shoe.createdAny());
rs.addMiles(400);
console.log('should replace?', rs.shouldReplace()); // false
rs.addMiles(200);
console.log('should replace?', rs.shouldReplace()); // true
console.log(rs.toString())
