var Stack = function() {
    this._storage = [];
    this.add = function(value){
      // write me
      //adds to the end of the stack (top)
      this._storage.push(value);
    };
    this.remove = function() {
      // write me
      //removes from the end of the stack (pop the top!)
      return this._storage.pop();
    };
  };