// Node class for linked list (collision handling)
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export default class HashMap {
  static LOAD_FACTOR = 0.75;

  #capacity;
  #hashTable;
  #size = 0;

  constructor(initialCapacity = 16) {
    this.capacity = initialCapacity;
    this.hashTable = new Array(initialCapacity).fill(null);
  }
}
