/*

Given an array of points. Add up the distances between them.  Round down to integer at the end.
You are provide with a distance function, that takes in two points and returns the distance.


Example pathDistance2([{ x : 2, y : 3}, { x : 4, y : 6}, { x : 5, y : 1}])  -> 8   // 8.7 


*/

function distance(p1, p2) {
	return Math.sqrt((p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y));
}

function pathDistance2(arr) {
		
	
}


console.log(pathDistance2([{ x : 2, y : 3}, { x : 4, y : 6}, { x : 5, y : 1}]));