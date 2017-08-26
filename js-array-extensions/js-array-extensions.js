// your code here

extend(Array, newArray);


function extend (to, from ){
	for (var i = 0; i < from.length; i++) {
		to[i] = from[i];
	}
	return to;
}

var newArray = [];

newArray.last = function (){
	return newArray[newArray.length];
}

newArray.first = function (){
	return newArray[0];
}