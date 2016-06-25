/*

Given an array of objects. Return an object with the key-counts. 


Example objectKeys([{ a : 'b' }, { a : 'x', c : 'd' }, { e : 'f' } ])  
						  -> { a : 2, c : 1, e : 1}  


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


function objectKeys(arr) {
	var newObj = {};
	each(arr, function(element){
		each(element, function(val, key){
			if(newObj.hasOwnProperty(key)){
				newObj[key] = newObj[key] + 1;
			}
			else{
				newObj[key] = 1;
			}
		});
	}); 
	 return newObj;
}


console.log(objectKeys([{ a : 'b' }, { a : 'x', c : 'd' }, { e : 'f' } ]));