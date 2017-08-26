  var makeHashTable = function() {
    //Do not change the max!
    //Ok I won't.. 
    var max = 4;

      return {
        _storage: [],
        retrieve: function(key) {
          return this._storage[hashFn(key, max)];
        },

        insert: function(key, value) {
          //your code is here
          var index = hashFn(key, max)
          //check if the bucket is empty
          if(this._storage[index] === undefined){
            //if empty, make bucket..
            this._storage[index] = [];
            this._storage[index].push([key, value]);
          }else{
            //if bucket already created, push to it
            this._storage[index].push([key, value]);
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