var Stack = function() {
    this._storage ={}
    this._start=0
    this._end=0
    this.add = function(){
      // write me
      this._storage[this._end++]=value;
    };
    this.remove = function() {
      // write me
      this._storage[this._start++];
    };
    
    return storage;
  };