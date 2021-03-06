

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        return;
      }
    } 
    this._storage[index].push([k, v]);
  } else {
    this._storage[index] = [[k, v]];
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][0] = undefined;
      this._storage[index][i][1] = undefined;
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: usually O(1), but with many keys with the same Hash, O(n);
 retrieve: usually O(1), but with many keys with the same Hash, O(n);
 remove: usually O(1), but with many keys with the same Hash, O(n);
 */


