/*

Given an array of objects. Return an array containing keys that occur multiple times. 


Example objectKeys2([{ a : 'b' }, { a : 'x', c : 'd' }, { e : 'f' } ])  -> [ 'a' ]  


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

function objectKeys2(arr) {
	var newArr = [];
	var obj = {};
	each(arr, function(element){
		each(element, function(val, key){
			if(obj.hasOwnProperty(key)){
				newArr.push(key)
			}
			else{
				obj[key] = val;
			}
			return newArr;
		});
	});
	return newArr;
}


console.log(objectKeys2([{ a : 'b' }, { a : 'x', c : 'd' }, { e : 'f'} ]));