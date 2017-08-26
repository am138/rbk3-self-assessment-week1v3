// your code here
var Array= function (arr) {
	// body...
	var newArr={}
	newArr.array=arr
	newArr.first=0;
	newArr.last=0;
	_.extend(newArr, arrayMethods);
	return newArr;
}

var arrayMethods={};

arrayMethods.first=function(){
	this.first= this.array[0];
	return this.first;
}

arrayMethods.last=function(){
	this.last= this.array[this.array.length-1];
	return this.last;
}

