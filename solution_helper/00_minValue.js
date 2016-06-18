/*

Given array of numbers, return the smallest

Example minValue([3,4,1,5])  ->  1


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


/*

Reduce is only called with 2 arguments, making the first element the default min value.
You cannot pass in 0 as default to reduce, as this might return 0 instead of the lowest value.

*/

var minValue = function (arr) {
	return reduce(arr, function(acc,num){
		return acc < num ? acc : num;
	})
}




console.log(minValue([3,4,1,5]));