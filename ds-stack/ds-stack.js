var Stack = function() {
	var StackMethod={}
    this._storage ={};
    this._count=0
    StackMethod.add = function(value){
     this._storage[value]=value;
     this._count++;
    };
    StackMethod.remove = function() {
      var del=this._storage[value];
         delete this._storage[value];
         this._count--;
         return del;
    };

  };