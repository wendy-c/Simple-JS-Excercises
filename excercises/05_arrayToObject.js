/*

Given an array of strings. Return an object that takes the keys and values from the array.


Example arrayToObject(['sky','blue','cloud','white'])  ->  { sky : 'blue', cloud : 'white'}


*/

function arrayToObject(arr) {

	return arr.reduce(function(acc,cur){
		//if indexOf is an uneven number
		if(arr.indexOf(cur)%2==0){
			acc[cur] = arr[arr.indexOf(cur)+1];
		}
		return acc;
	},{})
}


console.log(arrayToObject(['sky','blue','cloud','white']));