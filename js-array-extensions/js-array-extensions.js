var array= function (arrr) {
     this.arrr=arrr;

	this.first=function()
	{
		return this.arrr[0];
	};

	this.last=function()
	{
		return this.arrr[this.arrr.length];
	}
}
