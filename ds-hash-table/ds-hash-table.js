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
        //only add if there's no pre-existance to a value
        if(this._storage[hashFn(key, max)] === undefined;)
        {
          this._storage[hashFn(key, max)] = value;
        }
        else
        {
          //define a new array
          var _substorage=[];
          //store the current value in a temp value
          var temp=this._storage[hashFn(key, max)];
          //now make the value equals the new array
          this._storage[hashFn(key, max)] = _substorage;
          //now push the old value to it
          _substorage.push(temp);
          //push the new value
          _substorage.push(value);
        }
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