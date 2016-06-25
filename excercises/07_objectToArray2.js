/*

Given an object. Return an object with two arrays. 
Keys with all the keys, and values with all values.


Example objectToArray2({ sky : 'blue', cloud : 'white'})  
						  -> { keys : ['sky', 'cloud'], values : ['blue','white']}  


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

function objectToArray2(obj) {
	var keysArr = [];
	var valuesArr = [];
		return reduce(obj, function(acc, element, key){
			keysArr.push(key);
			valuesArr.push(element);
			acc["keys"] = keysArr;
			acc["values"] = valuesArr;
			return acc;
		},{});
}


console.log(objectToArray2({ sky : 'blue', cloud : 'white'}));