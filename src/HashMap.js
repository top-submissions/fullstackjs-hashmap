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
  #size;

  constructor(initialCapacity = 16) {
    this.#capacity = initialCapacity;
    this.#hashTable = new Array(initialCapacity).fill(null);
    this.#size = 0;
  }

  get capacity() {
    return this.#capacity;
  }

  get size() {
    return this.#size;
  }

  get hashTable() {
    return this.#hashTable;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }

  isOutOfBounds(index) {
    if (index < 0 || index >= this.#hashTable.length) {
      throw new Error('Trying to access index out of bounds');
    }
  }

  set(key, value) {
    // Check if we need to grow before adding
    if (this.#size >= this.#capacity * HashMap.LOAD_FACTOR) {
      this.grow();
    }

    const index = this.hash(key);

    // Bounds checking
    this.isOutOfBounds(index);

    // If bucket is empty, create new node
    if (this.#hashTable[index] === null) {
      this.#hashTable[index] = new Node(key, value);
      this.#size++;
      return;
    }

    // Bucket has nodes - traverse linked list
    let current = this.#hashTable[index];
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
    this.#size++;
  }

  get(key) {
    const index = this.hash(key);

    // Bounds checking
    this.isOutOfBounds(index);

    let current = this.#hashTable[index];

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

    let current = this.#hashTable[index];
    let previous = null;

    // Traverse linked list to find key
    while (current !== null) {
      if (current.key === key) {
        // Found the key - remove it
        if (previous === null) {
          // Removing head of linked list
          this.#hashTable[index] = current.next;
        } else {
          // Removing from middle or end
          previous.next = current.next;
        }
        this.#size--;
        return true;
      }
      previous = current;
      current = current.next;
    }

    return false; // Key not found
  }

  length() {
    return this.#size;
  }

  clear() {
    this.#hashTable = new Array(this.#capacity).fill(null);
    this.#size = 0;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.#hashTable.length; i++) {
      let current = this.#hashTable[i];

      // Traverse linked list at each bucket
      while (current !== null) {
        keysArray.push(current.key);
        current = current.next;
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let i = 0; i < this.#hashTable.length; i++) {
      let current = this.#hashTable[i];

      // Traverse linked list at each bucket
      while (current !== null) {
        valuesArray.push(current.value);
        current = current.next;
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (let i = 0; i < this.#hashTable.length; i++) {
      let current = this.#hashTable[i];

      // Traverse linked list at each bucket
      while (current !== null) {
        entriesArray.push([current.key, current.value]);
        current = current.next;
      }
    }

    return entriesArray;
  }

  grow() {
    const oldHashTable = this.#hashTable;
    const oldCapacity = this.#capacity;

    // Double capacity
    this.#capacity *= 2;
    this.clear();

    console.log(
      `Growth triggered! Capacity expanded from ${oldCapacity} to ${
        this.#capacity
      }`
    );

    // Rehash all existing entries
    for (let i = 0; i < oldHashTable.length; i++) {
      let current = oldHashTable[i];

      while (current !== null) {
        // Re-insert each key-value pair with new hash
        this.set(current.key, current.value);
        current = current.next;
      }
    }

    console.log(
      `Rehashing complete. New load factor: ${(
        this.#size / this.#capacity
      ).toFixed(2)}`
    );
  }

  // Utility method to visualize the hash table` (for debugging)`
  display() {
    console.log('\n--- HashMap Contents ---');
    console.log(
      `Capacity: ${this.#capacity}, Size: ${this.#size}, Load Factor: ${(
        this.#size / this.#capacity
      ).toFixed(2)}`
    );

    for (let i = 0; i < this.#hashTable.length; i++) {
      if (this.#hashTable[i] !== null) {
        let current = this.#hashTable[i];
        let bucketContents = [];

        while (current !== null) {
          bucketContents.push(`{${current.key}: ${current.value}}`);
          current = current.next;
        }

        console.log(`Bucket ${i}: ${bucketContents.join(' -> ')}`);
      }
    }
    console.log('------------------------\n');
  }
}
