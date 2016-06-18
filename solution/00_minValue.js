/*

Given array of numbers, return the smallest

Example minValue([3,4,1,5])  ->  1


*/

/*

Reduce is only called with 2 arguments, making the first element the default min value.
You cannot pass in 0 as default to reduce, as this might return 0 instead of the lowest value.

*/

function minValue(arr) {
	return arr.reduce(function(acc,num){
		return acc < num ? acc : num;
	})
}


console.log(minValue([3,4,1,5]));