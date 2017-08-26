var Stack = function() {
	var storage={}
    this._storage =[];
    this.add = function(item){
      this._storage.push(item)
    };
    this.remove = function() {
      this._storage.pop()
    };
    return storage;
  };