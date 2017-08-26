var Array = function(array){ 

newArr = {}; 

newArr._value = array;

newArr._first = function(){ 
	
	firstele = this._value[0];

	delete this._value[0];

	this._value.shift();

	return firstele;
}

newArr._last = function(){ 
	
	return this._value.pop();

} 

return newArr;
}