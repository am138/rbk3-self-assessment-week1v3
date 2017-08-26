var Stack = function() {
    this._storage = [];

    this._last = 0;

    this.add = function(value){
      this._storage[._last++] = value; 

    };
    this.remove = function() {
      if(._last){ 
      	this.storage[._last].pop();
      	._last--;
      }
    };
  };