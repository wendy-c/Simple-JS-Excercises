/*

Given an array of strings. Return the number of all letters in one object. 
Disregard spaces.


Example countAllLetters( ['simple example', 'all letters'])  
						  -> { s: 2, i: 1, m: 2, p: 2, l: 5, e: 5, x: 1, a: 2, t: 2, r: 1 }  


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

function countAllLetters(arr) {
	var temp = arr.map(function(str){
		return str.replace(" ","").split("");
	}).reduce(function(prev, cur){
		return prev.concat(cur);
		});

		return reduce(temp, function(acc,char){
				if(acc.hasOwnProperty(char)){
					acc[char] = acc[char] + 1;
				}
				else{
					acc[char] = 1;
				}
				return acc;
			},{});	
}


console.log(countAllLetters( ['simple example', 'all letters']));