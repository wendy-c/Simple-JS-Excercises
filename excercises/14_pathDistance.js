/*

Given an array of numbers. Add up the distances between numbers. 


Example pathDistance([2,5,3,1])  -> 7  // 3+2+2  


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

function pathDistance(arr) {
	return reduce(arr, function(acc, cur, idx){
		if(idx < arr.length-1){
			acc += Math.abs(cur - arr[idx+1]);
		}
		return acc;
	},0)
	
}

//using recursion
function pathDistance2(arr,prev,cur){
	var prev = arr[0];
	var cur = arr[1];
	if(arr.length === 2){
		return Math.abs(arr[0] - arr[1]);
	}
	return Math.abs(prev-cur) + pathDistance2(arr.slice(1));
}


console.log(pathDistance([2,5,3,1]));
console.log("pathDistance2",pathDistance2([2,5,3,1]));