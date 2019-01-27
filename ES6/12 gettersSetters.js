//We use _ convention to create a backing field to the property of class for which we declare getter and setter

//Without this every time get or set is called it would cause ModuleEvaluationError with message “Maximum call stack size exceeded”. 

//The get would be called and which would cause the get to be called again over and over creating an infinite loop.

class Shoe{
    get size(){    
        return this._size;  
    }
    set size(size){    
        this._size = size;  
    }
}

let s = new Shoe(); 
s.size = 13; // invokes setter 
console.log(s.size); // invokes getter 
