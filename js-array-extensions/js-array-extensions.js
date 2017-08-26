// your code here
class myArray extends Array {
	var obj = {}
		obj.first : function(){
			return this[0]
		},
		obj.last : function(){
			var lastIndex = this.length - 1;
			return this[lastIndex]
		}
	return obj;
}
