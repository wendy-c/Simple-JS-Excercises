/*

Given an array of strings. Return the number of letter E. 


Example countLetterE( ['simple example', 'letter e only'])  -> 6  


*/

function countLetterE(arr) {
	return arr.reduce(function(acc,cur){
		acc += cur.split("").reduce(function(innerAcc,cur){
			if(cur.toLowerCase() === "e"){
				innerAcc += 1;
			}
			return innerAcc;
		},0)
		return acc;
	},0);
	
}


console.log(countLetterE( ['simple example', 'letter e only']));