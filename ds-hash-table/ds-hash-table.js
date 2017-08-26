var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  var counter = 0;

    return {
      _storage: [],
      retrieve: function(key) {
        for (var i =0; i<_storage.length; i++){
          if (hashFn(key, max)===_storage[i]){

            return this._storage[i][counter]
           }

        }
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        for (var i = 0; i < _storage.length; i++) {
          
        
        if(hashFn(key, max)===_storage[i])
        this._storage[hashFn(key, max)] = [value];
        counter++;
      }
      else 
        this._storage[hashFn(key, max)] = value
    }
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