var array= function (arr) {
     this.arr=arr;
	this.first=function()
	{
		return this.arr[0];
	};
	this.last=function()
	{
		return this.arr[this.arr.length-1];
	}
}
