import HashMap from '../src/HashMap.js';

console.log('=== HashMap Testing Suite ===\n');

// Create a new instance
const test = new HashMap();

console.log('1. Initial state:');
console.log(`   Capacity: ${test.capacity}, Size: ${test.length()}`);

// Populate hash map (12 entries = 0.75 load factor)
console.log('\n2. Populating hash map with 12 entries...');
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(`   Current size: ${test.length()}`);
console.log(
  `   Current load factor: ${(test.length() / test.capacity).toFixed(2)}`
);
test.display();

// Test overwriting existing values (should not increase size)
console.log('3. Testing overwrite functionality...');
const sizeBefore = test.length();
test.set('apple', 'crimson');
test.set('banana', 'bright yellow');
test.set('carrot', 'deep orange');
console.log(`   Size before overwrites: ${sizeBefore}`);
console.log(`   Size after overwrites: ${test.length()}`);
console.log(
  `   ✓ Overwrites working correctly: ${sizeBefore === test.length()}`
);

// Test get method
console.log('\n4. Testing get() method...');
console.log(`   get('apple'): ${test.get('apple')}`);
console.log(`   get('banana'): ${test.get('banana')}`);
console.log(`   get('nonexistent'): ${test.get('nonexistent')}`);

// Add 13th entry to trigger growth
console.log('\n5. Adding 13th entry to trigger growth...');
console.log(`   Current capacity: ${test.capacity}`);
test.set('moon', 'silver');
console.log(`   New capacity after growth: ${test.capacity}`);
console.log(`   New size: ${test.length()}`);
console.log(
  `   New load factor: ${(test.length() / test.capacity).toFixed(2)}`
);
test.display();

// Test overwriting after growth
console.log('6. Testing overwrites after growth...');
const sizeAfterGrowth = test.length();
test.set('moon', 'pearl');
test.set('lion', 'bright golden');
console.log(`   Size before overwrites: ${sizeAfterGrowth}`);
console.log(`   Size after overwrites: ${test.length()}`);
console.log(
  `   ✓ Overwrites still working: ${sizeAfterGrowth === test.length()}`
);

// Test has method
console.log('\n7. Testing has() method...');
console.log(`   has('moon'): ${test.has('moon')}`);
console.log(`   has('sun'): ${test.has('sun')}`);
console.log(`   has('apple'): ${test.has('apple')}`);

// Test keys method
console.log('\n8. Testing keys() method...');
const keys = test.keys();
console.log(`   Total keys: ${keys.length}`);
console.log(`   Keys: ${keys.join(', ')}`);

// Test values method
console.log('\n9. Testing values() method...');
const values = test.values();
console.log(`   Total values: ${values.length}`);
console.log(`   Values: ${values.join(', ')}`);

// Test entries method
console.log('\n10. Testing entries() method...');
const entries = test.entries();
console.log(`   Total entries: ${entries.length}`);
console.log(`   First 5 entries:`);
entries.slice(0, 5).forEach(([key, value]) => {
  console.log(`      [${key}, ${value}]`);
});

// Test remove method
console.log('\n11. Testing remove() method...');
console.log(`   Size before removal: ${test.length()}`);
const removed1 = test.remove('apple');
const removed2 = test.remove('nonexistent');
console.log(`   remove('apple'): ${removed1}`);
console.log(`   remove('nonexistent'): ${removed2}`);
console.log(`   Size after removal: ${test.length()}`);
console.log(`   has('apple'): ${test.has('apple')}`);

// Test length method
console.log('\n12. Testing length() method...');
console.log(`   Current length: ${test.length()}`);

// Test clear method
console.log('\n13. Testing clear() method...');
console.log(`   Size before clear: ${test.length()}`);
test.clear();
console.log(`   Size after clear: ${test.length()}`);
console.log(`   keys() after clear: ${test.keys().length} keys`);

// Final verification
console.log('\n14. Adding entries after clear...');
test.set('sun', 'yellow');
test.set('ocean', 'blue');
test.set('tree', 'green');
console.log(`   New size: ${test.length()}`);
console.log(`   Keys: ${test.keys().join(', ')}`);

console.log('\n=== All Tests Complete ===');
console.log('✓ HashMap implementation working correctly!');
