var Stack = function() {
	var someInstance=this;
     this._storage = {};
     this._counter = 0 ;
     return someInstance ;
	
    
   this.add = function(value){
    	this._storage[this._counter++]= value
      
    };
    this.remove = function() {
    	this._counter && this._counter-- ;
    	var result =this._storage[this._counter] ;
    	delete this._storage[this._counter] ;
    	return result;

      
    };
  };