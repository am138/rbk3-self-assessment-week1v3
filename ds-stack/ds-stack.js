var Stack = function() {
    this._storage = [];
    this.add = function(val){
    	this._storage[this._storage.length] = val;
      // write me
    };
    this.remove = function() {
    	var v = this._storage[this._storage.length - 1];
    	delete this._storage[this._storage.length - 1];
    	return v;
      // write me
    };
  };