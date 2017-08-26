var Stack = function() {
    this._storage =[]
    this.add = function(value){
      // write me
      this._storage.push(value)
    };
    this.remove = function() {
      // write me
      var lastIndex = this._storage.length-1;
      this._storage.splice(lastIndex,lastIndex+1)
    };
  };