var Stack = function() {

	

  this._storage = {};
  this._size = 0;

  

    
}


    Stack.prototype.add = function(value){

      // write me
  this._storage[this._size] = value;
  this._size++;

};
   Stack.prototype.remove = function() {
this._size++ 
  var result = this._storage[this._size];

  delete this._storage[this._size];
this._size--;
  return result;
};
      // write me
   
  
  Stack.prototype.size = function() {
  return this._size;
};