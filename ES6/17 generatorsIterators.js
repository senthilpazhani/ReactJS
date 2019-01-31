//An Iteration is an object with a next() method which returns {done, value}

var a = [1,2,3], i = a.iterator();
console.log(i.next()); // {done: false, value: 1}
console.log(i.next()); // {done: false, value: 2}
console.log(i.next()); // {done: false, value: 3}
console.log(i.next()); // {done: true, value: undefined}


   

//We can make any object iterable
function ClassA(){	this.elements = [1, 2, 3];  }

//By adding the @@iterator method
ClassA.prototype['@@iterator'] = function() {
  return{
    elemets: this.elements,
    Index: 0,
    next: function(){
      if (this.index >= this.elements.length)
        return { done : true, value : undefined };
      else
        return { done: false, value: this.elements[this.index++]}
    }
  }
}

//We can iterate over the Object
var cal = new ClassA();

for (var num of col) { console.log(num); } 



// Generator:
// A generator provides a throw() method. Its next() method accepts a parameter.
// A generator function acts as a constructor for a generator.
var helloworld = function*(){
  yield 'hello';
  yield 'world';
}
var hw = helloworld();
console.log(hw.next()); // {value: 'hello', done: false}
console.log(hw.next()); // {value: 'world', done: false}
console.log(hw.next()); // {value: undefined, done: true}

var helloworld = function*(){
  var nextWord = yield 'hello';
  yield nextWord;
}
var hw = helloworld();
console.log(hw.next()); // {value: 'hello', done: false}
console.log(hw.next('Word')); // {value: 'world', done: false}
console.log(hw.next()); // {value: undefined, done: true}

var helloworld = function*(){
  console.log('Yield 1');
  var nextWord = yield 'hello';
  console.log('Yield 2');
  yield nextWord;
  console.log('No more yields…');
}
var hw = helloworld();
console.log(hw.next()); // {value: 'hello', done: false}
console.log(hw.next('Word')); // {value: 'world', done: false}
console.log(hw.next()); // {value: undefined, done: true}

// The code in the generator doesnt start executing until you say, When the yield statement is encountered it suspends execution until you tell it to resume.
// What about throw() ing errors?

var helloworld = function*(){
  console.log('Yield 1');
  var nextWord = yield 'hello';
  console.log('Yield 2');
  yield nextWord;
  console.log('No more yields…');
}
var hw = helloworld();
console.log(hw.next()); // {value: 'hello', done: false}
console.log(hw.throw('Word')); // {value: 'world', done: false}
console.log(hw.next()); // {value: undefined, done: true}

