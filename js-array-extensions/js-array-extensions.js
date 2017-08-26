var Array = function(array){ 

newArr = {}; 

newArr._value = array;

_.extend(newArr,arrayMethods)
return newArr;
}

arrayMethods{}; 

arrayMethods._first = function(){ 
	
	firstele = this._value[0];

	delete this._value[0];

	this._value.shift();

	return firstele;
}

arrayMethods._last = function(){ 
	
	return this._value.pop();

} 

//completed

