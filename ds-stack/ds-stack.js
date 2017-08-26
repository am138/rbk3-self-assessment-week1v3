var Stack = function() {
    this._storage ={};
    this._counter=0;
    this._add=add;
    this._remove=remove;
    this.add = function(value){

      // write me
      this._counter++;//run the counter 
      this._storage[this._counter]=value;//insert value
      return this._storage[this._counter];//return the insert value
    };
    this.remove = function() {
      // write me
      if(this._counter>0)
      {
      	var result =this._storage[this._counter];
      	    delete this._storage[this._counter];
      	       this._counter--;

      }
         
         
     
      
    };
  };