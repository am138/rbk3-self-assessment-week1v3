// your code here
var arrays=function(){
var array=Array.create(ar);
array._storage=[1,2,3,4];//this is type of array 
array._first=first;
array._last=last;
return array;
}
var ar={}; //empty object to use it in prototypr

ar.prototype._first=function()//so we can use any function prototypal here
{
	return this._storage[0];// return the first index

}
ar.prototype._last=function()
{
	return this._storage.lastIndexOf(); //return the last index

}
