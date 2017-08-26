 function first(array,n){
 	if(n===undefined){
 		return array[0]
 	}
 	return array.slice(0, n);
 }

 function last(array,n){
 	var a= array.length-1
 	if(n=== undefined){
 		return array[a];
 	}
 	 return array.slice(-n, array.length)
 	
 }
  
