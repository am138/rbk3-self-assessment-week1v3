var Stack = function() {
    this._storage =[]
    this._last=0
    this.add = function(value){
      // write me
      this._storage.push(value)
      this._last+=1

    };
    this.remove = function() {
      // write me
      var del = this._storage[this._last]
     this._storage= this._storage.splice(0,this._last)
      this._last-=1
      return del 
    };
  };