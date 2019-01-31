// Built-in value type
// uint8, uint8Clamped
// uint16, uint32, int8, int16, int32, float32, float64, boolean, string

//Typed Objects 
const Point2D = new StructType({
	X: uint32,
          	Y: uint32
});

//Can access the underlying storage of the struct
let p = Point2D({x:0, y:0});
P.x = 5;
let arrayBuffer = Point.storage(p).buffer;
typeof arrayBuffer //Arraybuffer
Arraybuffer.bytelength //8

// Hierarchy of typed objects

const Corner = new StructType({ point: Point2D });
const Triangle = Corner.dim(3);
let t = Triangle([{ point: {x:0, y:0} },
{ point: {x:5, y:5} },
{ point: {x:10, y:10} } ]);
t[0].point.x =5;

// A type object and all of its sub objects share the same memory
let t = Triangle([{ point: {x:0, y:0} },
{ point: {x:5, y:5} },
{ point: {x:10, y:10} } ]);
Triangle.storage(t).buffer.byteLength; //24

//Typed objects user copy-on-write
const Corner = new StructType({
	Point: Point2D
});
let p = Point2D({ x:1, y:1 });
let c = Corner({ point: {x:2, y:2} });

C.point = p; // p gets copied
C.point.x =5;
P.x; //1

// Basic Substitution
var name = "Tom", msg = `Hello, ${name} `;
console.log(name); // Hello, Tom
var total = 30, msg = `Total is ${total + 20} units`;

console.log(msg); // total is 50 units

Var total = 30
Var msg = `The total is ${total *2} units`;

Var myFunc = function(literals){
	Var str = ‘’, i=0;
	While (i<= literals.length){
		Str += literals[i++];
		if(i<arguments.length){str += ‘[‘ + arguments[i] + ‘]’;}
	}
	Return str;
};
Var total = 30;
console.log(myFunc `total is ${total *2} `); //total is 60 units
