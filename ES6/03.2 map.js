//map
/*
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for "new_array"
}[, thisArg])
Returns: A new array with each element being the result of the callback function.
*/
let divider = (str='-',num=50) => console.log(str.repeat(num));
$().ready(()=>{
// Simple string
let colors = ['red','blue','green','pink'];
console.log(colors.map( val => val.toUpperCase() ) );  divider(); 

// Using Template String
console.log( `Print in Uppercase ${colors.map( val => val.toUpperCase() )}` );  divider(); 
	
//More optimized was to create new array
let colors_upper = colors.map(val=> val.toUpperCase());  divider();

// passing value to "map"
console.log(colors.map((val,index,array,mystr='my colors' )=>{return `index[${index}] is ${val} in array ${array} ${mystr}`;}));
divider();

//Results would looks similar but Map will return array where as forEach resturns single value
colors.forEach((val,index,array,mystr="my colors")=>{console.log(`index[${index}] is ${val} in array ${array} ${mystr}`);});
divider();

// Passing value to map from out side world
let x=2; // assume for understanding
let y=3; // assume for understanding
let values = [1,2,3,4];
let counter = 5;
let squarefunc = adjustment => (x => x*x+adjustment) // {return x => x*x+adjustment; }
console.log( 'Passing value via function ',values.map( squarefunc(counter) ) );
Output : Passing value via function  (4) [6, 9, 14, 21]
divider();
let squarefunc = () => (x => x*x) 
console.log( 'Passing value via function ',values.map( squarefunc() ) );
Output : Passing value via function  (4) [1, 4, 9, 16]
let squarefunc = (y) => (y => ` X = ${x} Y = ${y}`); 
console.log( 'Passing value via function ',values.map( squarefunc(1) ) );
Output : Passing value via function  (4) [' X = 2 Y = 1', ' X = 2 Y = 2', ' X = 2 Y = 3', ' X = 2 Y = 4'] // since y is looping Y takes iterate value and X takes let value
let squarefunc = (y) => (x => ` X = ${x} Y = ${y}`); 
console.log( 'Passing value via function ',values.map( squarefunc(1) ) );
Output : Passing value via function  (4) [' X = 1 Y = 1', ' X = 2 Y = 1', ' X = 3 Y = 1', ' X = 4 Y = 1'] // since x is looping X takes iterate value and Y takes value from perameter 
let squarefunc = (x) => (x => ` X = ${x} Y = ${y}`); 
console.log( 'Passing value via function ',values.map( squarefunc(1) ) );
Output : Passing value via function  (4) [' X = 1 Y = 3', ' X = 2 Y = 3', ' X = 3 Y = 3', ' X = 4 Y = 3'] // since x takes iterate value and Y takes value from let, if Y is not declared it will through error 
let squarefunc = x => ` X = ${x} Y = ${y}`; 
console.log( 'Passing value via function ',values.map( squarefunc ) );
Output : Passing value via function  (4) [' X = 1 Y = 3', ' X = 2 Y = 3', ' X = 3 Y = 3', ' X = 4 Y = 3'] // Sames result with single function, but cant pass value
	
//Function some examples
let squarefunc = x => `F =${f} X = ${x} Y = ${y}`; 
squarefunc(100) ;
Output : 'F =undefined X = 100 Y = 3'	
let squarefunc = (f) => (x => `F =${f} X = ${x} Y = ${y}`); 
squarefunc(100)(200) ;
Output : 'F =100 X = 200 Y = 3'
let squarefunc = (x) => (x => `F =${f} X = ${x} Y = ${y}`); 
squarefunc(100)(200) ;
Output : 'F =undefined X = 200 Y = 3'
	
// using .bind()
let string = '*';
let squarefunc_simplified = (adjustment, string, x) => (x*x + adjustment)+string; //iterating element should be the last paramenter (current, index, array)
console.log( 'Passing value using Bind ', values.map( squarefunc_simplified.bind(null, counter, string) ));
divider();
let squarefunc_simplified = (adjustment, string, x) => ` adjustment ${adjustment} string ${string} x ${x}`; //iterating element should be the last paramenter
console.log( 'Passing value using Bind ', values.map( squarefunc_simplified.bind(string) ));
divider();
let squarefunc_simplified = (adjustment, string, x) => ` adjustment ${adjustment} string ${string} x ${x}`; //iterating element should be the last paramenter
console.log( 'Passing value using Bind ', values.map( squarefunc_simplified.bind() ));
Output : Passing value using Bind  (4) [' adjustment 1 string 0 x 1,2,3,4', ' adjustment 2 string 1 x 1,2,3,4', ' adjustment 3 string 2 x 1,2,3,4', ' adjustment 4 string 3 x 1,2,3,4']	
divider();
let squarefunc_simplified = (adjustment, string, x) => ` adjustment ${adjustment} string ${string} x ${x}`; //iterating element should be the last paramenter
console.log( 'Passing value using Bind ', values.map( squarefunc_simplified.bind(string) ));
Output : Passing value using Bind  (4) [' adjustment 1 string 0 x 1,2,3,4', ' adjustment 2 string 1 x 1,2,3,4', ' adjustment 3 string 2 x 1,2,3,4', ' adjustment 4 string 3 x 1,2,3,4']
divider();
let squarefunc_simplified = (adjustment, string, x) => ` adjustment ${adjustment} string ${string} x ${x}`; //iterating element should be the last paramenter
console.log( 'Passing value using Bind ', values.map( squarefunc_simplified.bind(counter, string) ));
Output : Passing value using Bind  (4) [' adjustment * string 1 x 0', ' adjustment * string 2 x 1', ' adjustment * string 3 x 2', ' adjustment * string 4 x 3']
divider(); 
let squarefunc_simplified = (adjustment, string, x) => ` adjustment ${adjustment} string ${string} x ${x}`; //iterating element should be the last paramenter
console.log( 'Passing value using Bind ', values.map( squarefunc_simplified.bind(null, count, string) ));
Output : Passing value using Bind  (4) [' adjustment 0 string * x 1', ' adjustment 0 string * x 2', ' adjustment 0 string * x 3', ' adjustment 0 string * x 4']
divider();
let squarefunc_simplified = (adjustment, string, x) => ` adjustment ${adjustment} string ${string} x ${x}`; //iterating element should be the last paramenter
console.log( 'Passing value using Bind ', values.map( squarefunc_simplified.bind(null, counter, string) ));
Output : Passing value using Bind  (4) [' adjustment 5 string * x 1', ' adjustment 5 string * x 2', ' adjustment 5 string * x 3', ' adjustment 5 string * x 4']
divider();
	
// by calling function
let squarefunc_ = (x,adjustment) => x*x+adjustment; 
console.log( 'Passing value by calling function ', values.map( x => squarefunc_(x,counter) ) );
// it is same as below
let squarefunc_ = (adjustment) => x => x*x+adjustment; 
console.log( 'Passing value by calling function ', values.map( squarefunc_(counter) ) );
Output : Passing value by calling function  (4) [6, 9, 14, 21]
divider();
                                
function mapSingleFunc(values, adjustment) {
    return values.map((x) => (x * x)+ adjustment );    
  };
console.log(mapSingleFunc(values, counter)); 
divider();

//Most optimized way
console.log( 'Passing value by calling function ', values.map( (counter => x => x*x+counter)(counter) ) );
divider();

let numbers = [1, 4, 9];
console.log(`Square root`,numbers.map(Math.sqrt));
divider();

//Using map to reformat objects in an array
let kvArray = [
    {key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];

let reformattedArray = kvArray.map(obj =>{ 
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
console.log(`Reformated Array `,reformattedArray);
divider();

// New way of calling 
let map = Array.prototype.map;
let a = map.call('Hello World', (x) => x.charCodeAt(0));
console.log(a);
let av = map.call(values, (counter => x => x*x+counter)(counter));
console.log(av);
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
divider();

// capture the classes used in the div
let elemsPrototype = document.querySelectorAll('div');
console.log(elemsPrototype)
let valuesPrototype = Array.prototype.map.call(elemsPrototype, obj => obj.className); //obj.id //obj.classList[0]
console.log(valuesPrototype)
console.log( map.call(elemsPrototype, obj => obj.classList[0] ) )
console.log( map.call(elemsPrototype, obj => obj.classList[1] ) )
console.log( map.call(elemsPrototype, obj => obj.id ) )
divider();

//Tricky use case
function returnInt(element) {
    return ; //10 - which numerical system to use like, 0, 10, 16
}  
console.log(['1', '2', '3'].map( element => parseInt(element, 10) )) // [1, 2, 3]
console.log(['1', '2', '3'].map( str => parseInt(str) ));
console.log(['1', '2', '3'].map( Number )) // [1, 2, 3]
console.log(['1.1', '2.2e2', '3e300'].map( Number )) // [1.1, 220, 3e+300]
divider('*'); 

let myarrObject = [
    name='psk',
    dept='dev'
]
console.log( myarrObject.map(x => x) )

let myObject = [
    {name:'psk', dept:'dev'},
    {name:'senthil', dept:'qa'},
    {name:'jegan', dept:'fin'}
]
console.log( myObject.map(x => x) )
console.log( myObject.map(x => x.name) )
console.log( myObject.map(x => x.dept) )

});

//.map()
getProductPositions = function(productIds){
	var positions = [];
    if(prodcat && prodcat.data.pids){
        for (var i=0;i<productIds.length;i++){
            positions.push(this.findElementIndex(prodcat.data.pids, productIds[i]));
        }
    }
    return positions;
}
//Better approach
getProductPositions_enhanced = function(productIds){
	var positions = [];
    positions = productIds.map(function(elem) {
        return this.findElementIndex(prodcat.data.pids, elem);
    });
    return positions;
}
