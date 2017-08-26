var Array = function(array){
	var newObj={};
	 newObj.first= function(){
	 	return array[0];
	 }
	 newObj.last= function(){
	 	var x = []
	 	x = array.pop()
	 	return x;
	 }
	 return newObj;
}
	
