var Stack = function() {
    this._storage ={}
    this._counter=0
    this.add = function(value){
    	this.storage=value
    	this.counter++
    	return value
      // write me
    };
    this.remove = function() {
    	var deleted=this.storage[counter]
    	delete this.storage[counter]
    	this.counter--
    	return deleted
      // write me
    };
  };