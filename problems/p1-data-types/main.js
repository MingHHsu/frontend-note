// ---------- dynamic types ----------
let value = 0;
console.log(typeof value, value);

value = 'string';
console.log(typeof value, value);

value = true;
console.log(typeof value, value);

value = { a: 0, b: 1 };
console.log(typeof value, value);

value = [0, 1];
console.log(typeof value, value);

value = null;
console.log(typeof value, value);

value = undefined;
console.log(typeof value, value);

console.log('\n');

// ---------- call by value ----------
console.log('call by value: ');
function swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
  return {a, b}
}

var x = 10;
var y = 20;
const vv = swap(x, y);
console.log(vv.a, vv.b);

console.log('\n');

// ---------- call by reference ----------
console.log('call by reference: ');

var objectA = {};

var objectB = objectA;

objectB.a = 'a';

console.log(objectA, objectB);

console.log('\n');

// ---------- call by sharing ----------
console.log('call by sharing: ');

var objectA = {};

var objectB = objectA;

objectB = { a: 'a' };

console.log(objectA, objectB);

console.log('\n');

// ---------- quiz ----------
console.log('quiz: ');

var objectA = { key: 'value' };

var objectB = { key: 'value' };

var objectC = objectA;

console.log('objectA === objectB', objectA === objectB);
console.log('objectA === objectC', objectA === objectC);
console.log('objectA.key === objectB.key', objectA.key === objectB.key);

console.log('\n');

// ---------- mutable ----------
console.log('mutable: ');

objectA.key = 'newAValue';

objectC['key'] = 'newCValue';

console.log('objectA: ', objectA);
console.log('objectC: ', objectC);
console.log('objectA === objectC', objectA === objectC);

console.log('\n');

// ---------- immutable ----------
console.log('immutable: ');

objectA = { key: 'newAValue' };
objectC = { key: 'newCValue' };

console.log('objectA: ', objectA);
console.log('objectC: ', objectC);
console.log('objectA === objectC', objectA === objectC);
