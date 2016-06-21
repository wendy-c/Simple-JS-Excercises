/*

Given an array of numbers, return the sum of all numbers

Example arraySum([3,4,1,5])  ->  13


*/

function arraySum(arr) {
	return arr.reduce(function(acc, cur){
		return acc + cur;
	});
}


console.log(arraySum([3,4,1,5]));