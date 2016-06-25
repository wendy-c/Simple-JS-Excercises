/*

Given a string. Return a string of all occuring characters in their order of appearance. 
Disregard any spaces.

Example characterOccurance('good morning')  
						-> 'godmrni'  


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

function characterOccurance(line) {
	var newLine = line.replace(" ","").split("");
	var answer = newLine.reduce(function(acc, cur, idx){
		if(newLine.indexOf(cur) === idx){
			acc.push(cur);
		}console.log(pathDistance([2,5,3,1]));
		 return acc;
	},[]);
	return answer.toString();
}


console.log(characterOccurance('good morning' ));