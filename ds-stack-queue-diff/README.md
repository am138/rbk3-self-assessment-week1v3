## Data Structures
* [ ] Describe the difference between a stack and a queue and give examples of when you might use them.

## Queue vs. Stack
Please write your explanation below.


var Queue = function() {
  var rbk = {};

  var storage = {};
  var start=0
  var end=0

  rbk.enqueue = function(value) {
   storage[end++]=value;
  };

  rbk.dequeue = function() {
  var count=storage[start++];
  if(rbk.size()){
  start++;
  return count;
  }
   storage[start++];
  };

  rbk.size = function() {
   
   return end-start;
    
      
  };

  return rbk;
};

 



var stack = function() {
  var rbk = {};

  var storage = {};
  var start=0
  var end=0

  rbk.pushstack = function(value) {
   storage[end++]=value;
  };

  rbk.popstack = function() {
  var count=storage[start++];
  if(rbk.size()){
  start++;
  return count;
  }
   storage[start++];
  };

  rbk.sizestack = function() {
   
   return end-start;
    
      
  };

  return rbk;
};
