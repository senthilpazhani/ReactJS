

//Asynchronous programming easier using Generators
//Old School way
var readFile = function (filename, cb){};
var main = function(cb) {
  readFile('file1', function(err, contents1) {
    if(err) return cb(err);
    console.log(contents1);
    readFIle('file2', function(err, contents2) {
      if(err) return cb(err);
      console.log(contents2);
     cb();
   });
 });
}
main(console.error);

//Improved using Promises:
var readFile = Promise.promisify(function(fileName, cb){});

var main = function() {
    return readFile('file1')
        .then(function(contents){
            console.log(contents);
            return readFile('files2');
        })
        .then(function(contents){
            console.log(contents);
        }).catch(console.error);
}
main();

// Better way with Generators,
// But first we need a function which will automatically handle the yield-ed values and call next() on the generator
// Automatically resolve Promises and call next();
var runGenerator = function(generatorFUnction){
    var gen =  genratorFunctino();
    var gNext = function(err, answer) {
        if(err) return gen.throw(err);
        var res = gen.next(answer);
        if (!res.done) {
            Promise.resolve(res.value)
                .then(function(newAnswer){
                    gNext(null, newAnswer); 
    }).catch(gNext);
        }
    }
    gNext();
}

// Now we can rewrite main() as a generator function:

var readFile = Promise.promisify(function(fileName,cb) {});
var main = function*(){
    try{
       console.log(yield readFile('file1'));
       console.log(yield readFile('file2'));
     }catch)err){
       console.error(err);
   }
}
runGenerator(main);

// You don't need to write runGenerator() yourself
// https://github.com/visionmedia/co - similar to runGenerator but more powerful
// https://github.com/petkaantonov/bluebird - kick-ass Promise library and provides runGenerator -like methods

//Generator comprehension
{for (x of a)
  for (y of b)(x*y)
}

(function*(){
    for (x of a) {
        for (y of b){
            yield x*y;
        }
    }
}())
