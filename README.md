# HashMap Implementation

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-Lesson-red)](https://www.theodinproject.com/lessons/javascript-hashmap)

> A complete HashMap implementation from scratch using JavaScript, featuring collision handling through linked lists and dynamic resizing. Built as part of The Odin Project's JavaScript course to understand how hash tables work under the hood.

## 📋 Table of Contents

- [HashMap Implementation](#hashmap-implementation)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Tests](#running-tests)
  - [📚 What I Learned](#-what-i-learned)

## ✨ Features

- **Complete HashMap Implementation** - All essential hash map operations (set, get, has, remove, etc.)
- **Collision Resolution** - Uses linked lists (separate chaining) to handle hash collisions
- **Dynamic Resizing** - Automatically doubles capacity when load factor reaches 0.75
- **Bounds Protection** - Prevents out-of-bounds array access
- **Integer Overflow Protection** - Modulo operator applied during hashing to handle long keys
- **Comprehensive Testing** - Includes test suite to verify all functionality

## 🚀 Getting Started

Want to run this project locally? Here's how:

### Prerequisites

- Node.js (v14 or higher)
- Basic understanding of data structures (linked lists, arrays)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MatimotTheTimoters/hashmap.git
cd hashmap
```

1. Ensure your package.json has ES modules enabled:

```json
{
  "type": "module"
}
```

### Running Tests

Run the test suite to see the HashMap in action:

```bash
node test.js
```

The test file demonstrates:

- Populating the hash map to full capacity
- Triggering automatic growth
- Overwriting existing values
- All CRUD operations (Create, Read, Update, Delete)
- Retrieving keys, values, and entries

## 📚 What I Learned

- Using `load factor` and `capacity` to check if the list needs to grow
- How to hash a given key using modulo (`%`)
- Implementing a linked list within each bucket/index of the hash table/key value pair array
- I was able to practice traversing a linked list again by going through all nodes
- Accessing the key/value from each node within a given bucket
- Using two pointer (`current` and `previous`) to remove a node by updating their `pointer` property
- Dynamically increasing the size of the list via `grow` function

---

<div align="center">

Built with 💡 and ☕ as part of my journey through <a href="https://www.theodinproject.com/">The Odin Project</a>

</div>
