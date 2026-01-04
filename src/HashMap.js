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

  isOutOfBounds(index) {
    if (index < 0 || index >= this.hashTable.length) {
      throw new Error('Trying to access index out of bounds');
    }
  }

  set(key, value) {
    // Check if we need to grow before adding
    if (this.size >= this.capacity * this.LOAD_FACTOR) {
      this.grow();
    }

    const index = this.hash(key);

    // Bounds checking
    this.isOutOfBounds(index);

    // If bucket is empty, create new node
    if (this.hashTable[index] === null) {
      this.hashTable[index] = new Node(key, value);
      this.size++;
      return;
    }

    // Bucket has nodes - traverse linked list
    let current = this.hashTable[index];
    let previous = null;

    while (current !== null) {
      // Key exists - update value
      if (current.key === key) {
        current.value = value;
        return;
      }
      previous = current;
      current = current.next;
    }

    // Key doesn't exist - add to end of linked list
    previous.next = new Node(key, value);
    this.size++;
  }

  get(key) {
    const index = this.hash(key);

    // Bounds checking
    this.isOutOfBounds(index);

    let current = this.hashTable[index];

    // Traverse linked list to find key
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return null; // Key not found
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);

    // Bounds checking
    this.isOutOfBounds(index);

    let current = this.hashTable[index];
    let previous = null;

    // Traverse linked list to find key
    while (current !== null) {
      if (current.key === key) {
        // Found the key - remove it
        if (previous === null) {
          // Removing head of linked list
          this.hashTable[index] = current.next;
        } else {
          // Removing from middle or end
          previous.next = current.next;
        }
        this.size--;
        return true;
      }
      previous = current;
      current = current.next;
    }

    return false; // Key not found
  }
}
