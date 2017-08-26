var Stack = function() {
    this._storage =[]
    this.add = function(val){
    	var s=0;
      this._storage[s]=val;
      s++;
      // write me
    };
    this.remove = function() {
    	var re=this._storage[s];
    	delete this._storage[s]
    	s--;
      // write me
    };
  };