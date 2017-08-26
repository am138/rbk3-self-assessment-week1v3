var Stack = function() {

	this._storage =[];

	this.add = function(value){
    	this._storage.push(value);
  	};

  	this.remove = function(value){
  		for(var i=0;i<this._storage.length;i++){
      	if(this._storage[i]===value)
      		this._storage.splice(i,1);
    	}
  	};
};