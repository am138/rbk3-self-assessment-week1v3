// your code here

function makeArr(nativeArr){
	var arrayOfMethod = [];
	arrayOfMethod[0] = function(){
		return nativeArr[0];
	}
	arrayOfMethod[1] = function(){
		return nativeArr[nativeArr.length-1];
	}

	extendArr(nativeArr , arrayOfMethod);
}




function extendArr(arr1 , arr2){
	for(var i=0 ; i < arr2.length ; i++){
		arr1.push(arr2[i]);
	}
	return arr1 ;
}
