var Stack = function() {
    this._storage = [];
    this.add = function(value){
      // write me
      this._storage.push(value);
    };
    this.remove = function() {
      // write me
      var newStorage=[];
      for(var i=0; i<this._storage.length; i++){
      	if(i !== this._storage.length-1){
      		newStorage.push(this._storage[i]);
      	}
      }
      this._storage=newStorage;
    };
    this.show= function(){
    	return this._storage;
    }
  };