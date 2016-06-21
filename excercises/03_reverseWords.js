/*

Given an array of strings, return a new array with all strings reversed
Retain the order of the original array.

Example reverseWords(['no','beer','on','hawaii'])  ->  ['on','reeb','no','iiawah']


*/

function reverseWords(arr) {
	return arr.reduce(function(acc, cur){
		acc.push(cur.split("").reverse().join());
		return acc;
		},[]);
}


console.log(reverseWords(['no','beer','on','hawaii']));
