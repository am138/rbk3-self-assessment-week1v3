var Stack = function() {
    this._storage =[];
    this.count=0;
    this.add = function(value){
    	count++;
      this._storage.push(value);
    };
    this.remove = function() {
    	var x=this._storage[this.count];
      this._storage.pop();
    };
    return ._storage;
  };