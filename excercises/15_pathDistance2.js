/*

Given an array of points. Add up the distances between them.  Round down to integer at the end.
You are provide with a distance function, that takes in two points and returns the distance.


Example pathDistance2([{ x : 2, y : 3}, { x : 4, y : 6}, { x : 5, y : 1}])  -> 8   // 8.7 


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

function distance(p1, p2) {
	return Math.sqrt((p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y));
}

function pathDistance2(arr) {
	return reduce(arr, function(acc, cur, idx){
		if(idx < arr.length -1){
			acc += distance(cur, arr[idx+1]);
		}
		return Math.floor(acc);
	},0);
	
}


console.log(pathDistance2([{ x : 2, y : 3}, { x : 4, y : 6}, { x : 5, y : 1}]));