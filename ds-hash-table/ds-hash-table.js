var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        // we are gonna have to make each key in the storage as an Array
        //which will accept more than one value 
        // or as MDN says that we need to make a freeEntry function
        //that will be invoked if the key already exists to free the value of that key
        var kk = hashFn(key, max)
        // for (var i = 0; i<this._storage.length; i++){
        //   if (kk === i){
        //     var xval = this._storage[i]
        //     this._storage[i] = []
        //     this._storage[i].push(xval, value)
            // I think that this function will be good for two values,
            // because if a third one entered the key will be consisting of 
            // a value and an array of the two previous values.
  //         } else this._storage[kk] = value;
  //       } 
        
  //   }
  // }


  // or we could make all the indexes as an arrays from the beginning and push the values to it.
       if (Array.isArray(this._storage[kk])){
        this._storage[kk].push(value)
       } else {
        this._storage[kk] = [];
        this._storage[kk].push(value)
       }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};