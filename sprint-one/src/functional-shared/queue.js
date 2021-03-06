var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  _.extend(newQueue, queueMethods);
  newQueue.storage = {};
  newQueue.queueSize = 0;
  newQueue.front = 0;
  newQueue.back = 0;
  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.queueSize;
  },
  enqueue: function(value) {
    this.storage[this.back] = value; 
    this.back++;
    this.queueSize++;
  }, 
  dequeue: function() {
    if (this.queueSize !== 0) {
      var out = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      this.queueSize--;
      return out;
    }
  }
};


