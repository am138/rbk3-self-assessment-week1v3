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
        var tuple=[];
        tuple[0]=key;
        tuple[1]=value;
        var bucket=[];
        if(!Array.isarray(this._storage[hashFn(key, max)]) ){
          bucket.push(tuple);
          this._storage[hashFn(key, max)]=bucket;
        
        }
        else {
          for (var i=0;i<this._storage[hashFn(key, max)];i++){
            if (this._storage[hashFn(key, max)][i][0]===key){
             this._storage[hashFn(key, max)][i][1] =value;
            }
          }
          this._storage[hashFn(key, max)].push(tuple);
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