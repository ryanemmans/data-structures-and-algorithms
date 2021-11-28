'use strict';

const HashTable = require('./hash-table.js');

describe('Testing the HashTable', () => {
  it('Adds a key/value pair to the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Ryan', 'student');
    expect(hashTable.map[hashTable.hash('Ryan')].head.value['Ryan']).toBe('student');
  });

  it('Retrieves the value stored based on a key', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Ryan', 'student');
    expect(hashTable.get('Ryan')).toBe('student');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Ryan', 'student');
    expect(hashTable.get('student')).toBe(null);
  });

  it('Successfully handles a collision in the hashtable', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Ryan', 'person');
    hashTable.add('Jane', 'cat');
    expect(hashTable.get('Ryan')).toBe('person');
    expect(hashTable.get('Jane')).toBe('cat');
  });

  it('Successfully retrieves a value from a bucket within the hashtable that has a collision', () => {
    const hashTable = new HashTable(1024);
    hashTable.add('Ryan', 'person');
    hashTable.add('Ryan', 'student');
    expect(hashTable.map[hashTable.hash('Ryan')].head.value['Ryan']).toBe('person');
    expect(hashTable.map[hashTable.hash('Ryan')].head.next.value['Ryan']).toBe('student');
  });

  it('Successfully hashes a key to an in-range value', () => {
    const hashTable = new HashTable(1024);
    expect(hashTable.hash('Ryan')).toBe(854);
  });
});
