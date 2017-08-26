var Stack = function() {
    this._storage = [];
    this.add = function(val){
      // write me
      //will push the value to the storage 
      this._storage.push(val)
    };
    this.remove = function() {
      // write me
      // will remove and return the last value
      this._storage.splice(this._storage.length-1 ,1)
    };
  };

  //Completed