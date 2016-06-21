/*

Given an array of strings, return the sum of the lengths

Example totalCharacters(['this', 'is','not', 'difficult'])  ->  18


*/

function totalCharacters(arr) {
	return arr.reduce(function(acc, cur){
		acc += cur.length;
		return acc;
	},0)
}


console.log(totalCharacters(['this', 'is','not', 'difficult']));