// // your code here

var arrayExtend = function (array){
	this.arr=array;
}
arrayExtend.prototype.first=function (){
		return this.arr[0];
	};
arrayExtend.prototype.last=function(){
		return this.arr[this.arr.length-1];
	};

// var arrayExtend = function (array){
// 	var obj ={};
// 	obj.first=function (){
// 		return array[0];
// 	};
// 	obj.last=function(){
// 		return array[array.length-1];
// 	};
// 	return obj;
// }