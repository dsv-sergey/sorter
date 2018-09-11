class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = function(a, b) { return a - b }
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    if (indices.length <= 1) {
      return;
    }
    var newArr = [];
    indices.forEach(e => newArr.push(this.arr[e]));    
    newArr.sort(this.compareFunction);
    var sortArr = [];
    for (var i = 0; i < this.arr.length; i++) {      
      if (indices.includes(i)) {
        sortArr.push(newArr.shift());
      } else {
        sortArr.push(this.arr[i]);
      }
    }
    this.arr = sortArr;
    return this.arr;
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;