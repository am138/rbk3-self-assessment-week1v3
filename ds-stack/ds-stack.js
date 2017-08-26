var Stack = function() {
    this._storage ={}
    this.counter=0
    this.add = function(){
      // write me
      this._storage[counter++]



    };
    this.remove = function() {
      // write me
      if(counter){
      	counter--
      var h=this._storage[this.counter]
delete this._storage[this.counter]

      return h;
  }
    };
  };