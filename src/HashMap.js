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

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
}
