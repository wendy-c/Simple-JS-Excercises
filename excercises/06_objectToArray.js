/*

Given an object. Return an array with keys and values from the object.
Reverse excercise 05.


Example objectToArray({ sky : 'blue', cloud : 'white'})  -> ['sky','blue','cloud','white']  


*/
var each = function(collection, iterator) {
    if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    }
    else{
      for(var key in collection){
        iterator(collection[key], key, collection);
      }
    }
  };

var reduce = function(collection, iterator, accumulator) {
	var skip = arguments.length === 2;
    each(collection, function(element, index){ 
      accumulator = skip ? element : iterator(accumulator, element, index);
      skip = false;
    });
    return accumulator;
  };


function objectToArray(obj) {
	return reduce(obj,function(acc,val, key){
		acc.push(val, key);
		return acc;
	},[])
	
}


console.log(objectToArray({ sky : 'blue', cloud : 'white'}));