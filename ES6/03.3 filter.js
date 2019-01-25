//filter
/**
 * var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 * Returns: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 * 
 */
let divider = (str='-',num=50) => console.log(str.repeat(num));
$().ready(()=>{
    let numbers = [1,60,34,30,20,5]    
    let c=numbers.filter( val => val<20 )
    console.log(c)

    let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];    
    console.log(words.filter(word => word.length > 6));
    
    // Filtering invalid entries from JSON
    let arr = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { id: 12.2 },
        { },
        { id: null },
        { id: NaN },
        { id: 'undefined' }
    ];
    
    let invalidEntries = 0;
    let isNumber = (obj) => {
        return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj); }
    let filterByID = (item) => {
        if (isNumber(item.id) && item.id !== 0) { return true; } 
        invalidEntries++;
        return false; 
    }    
    let arrByID = arr.filter(filterByID);
    console.log('Filtered Array\n', arrByID); 
    console.log('Number of Invalid Entries = ', invalidEntries); 
    divider();
    
    //Searching in array
    let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    function filterItems(query) {
        return fruits.filter(function(el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      }
    console.log(filterItems('ap')); // ['apple', 'grapes']

    let str = "an";
    console.log( fruits.filter( x => x.toLowerCase().indexOf(str.toLowerCase()) > -1 ) ); // ['banana', 'mango', 'orange']
      
     
    
});