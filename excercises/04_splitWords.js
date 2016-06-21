/*

Given an array of strings, return a new array with each word in a single element.
Retain the order of the original array.

Example splitWords(['this is','how','we break up','words'])  
            ->  ['this','is','how','we','break','up','words']

*/

function splitWords (arr) {
	return arr.reduce(function(acc,cur){
		return acc.concat(cur.split(" "));
	},[])

}

console.log(splitWords(['this is','how','we break up','words']))