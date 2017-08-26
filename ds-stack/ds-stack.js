var Stack = function() {
    this._storage ={};
    var counter =-1;
    this.add = function(value){
    	this._storage[++counter] = value;
      // write me
    };
    this.remove = function() {
    	delete this._storage[counter--]
      // write me
    };
    return this._storage;
  };
