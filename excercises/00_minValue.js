/*

Given an array of numbers, return the smallest

Example minValue([3,4,1,5])  ->  1


*/

function minValue(arr) {
	return arr.reduce(function(acc, cur){
		if(acc > cur){
			acc = cur;
		}
		return acc;
	})
}


console.log(minValue([3,4,1,5]));
