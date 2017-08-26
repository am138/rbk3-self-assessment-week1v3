// your code here
var getElementsInArray=function (array){
	var storage={};

	storage.first=function(){
		return array[0]
	};
	storage.last=function (){
		return array[array.length-1]
	}
	return storage;
}