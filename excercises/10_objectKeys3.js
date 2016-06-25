/*

Given an array of objects. Return an object with all the keys and an array of all the values. 


Example objectKeys3([{ a : 'b' }, { a : 'x', c : 'd' }, { e : 'f' } ])  
						-> { a : ['b','x'], c : ['d'], e : ['f']}  


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

function objectKeys3(arr) {
	var obj = {};
	each(arr, function(element){
		each(element, function(val, key){
			if(obj.hasOwnProperty(key)){
				obj[key].push(val);
			}
			else{
				obj[key] = [];
				obj[key].push(val)
			}
		});
	});
	return obj;
	
}


console.log(objectKeys3([{ a : 'b' }, { a : 'x', c : 'd' }, { e : 'f' } ]));