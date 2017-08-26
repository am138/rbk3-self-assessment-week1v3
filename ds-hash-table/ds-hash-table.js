var makeHashTable = function() {
  //Do not change the max!
  var max = 4;


    return {
      _storage: [],
      _values: {}
      _counter:0

      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        this._storage[hashFn(key, max)] = value;
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

// am was just trying some thing 
// you can consider that I dont have enough time to cover hash tables 

insert = function(key, value) {
  var hash = key.toString().length % 4
  if(!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }
  //if(!this.values[hash].hasOwnProperty(key)) {
    //this._counter++;
  }
  this.values[hash][key] = value;
};



