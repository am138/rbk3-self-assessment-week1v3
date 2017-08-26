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
    	this._storage.slice(0,this._storage.length-1)
    	s--;
    	return re;
      // write me
    };
  };