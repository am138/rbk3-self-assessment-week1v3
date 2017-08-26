var Stack = function(value) {
    this._storage ={}
   this.value = value
    this.end = 0
    
    this.add = function(){
      // write me
        this._storage[this.end++] =this.value
    };
    this.remove = function() {
      // write me
        var x = this._storage[this.end++]
        delete  this._storage[this.end++]
        return x ;
    
  };

var newStack = new Stack(value)




//////////
var Stack = function(value) {
    this.storage = {}
   this.value = value
    this.end = 0
}
    Stack.prototype.add = function(){
      // write me
        this.storage[this.end++] =this.value
    };
    stack.prototype.remove = function() {
      // write me
        var x = this.storage[this.end++]
        delete  this.storage[this.end++]
        return x ;
    };
  };
var newStack = new Stack(value)
