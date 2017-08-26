var Stack = function() {
	var someInstance = {}
    someInstance.storage = {}
    someInstance.counter = 0


    someInstance.add = function(value){
      // write me
      //adding data to the Stack:
      this.storage[this.counter]=value;
      this.counter ++

      
    };

    someInstance.remove = function() {
      // write me
      // removing data from the Stack/ saving it to give it to give the user 
	var val = this.storage[this.counter-1]
	delete this.storage[this.counter-1]
	this.counter--;
	return val; 

    };

    return someInstance;
  };