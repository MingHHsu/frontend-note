// ----- Array -----
console.log('Array: ');
const arr1 = [1, 2, 3];
// const arr1 = Array.of(1, 2, 3);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const arr2 = arr1.map((item) => item * 2);

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr1 === arr2', arr1 === arr2);

console.log('\n');

// ----- Object -----
console.log('Object: ');
const object1 = { a: 'a', b: 'b' };

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const object2 = Object.assign(object1, { c: 'c' });

console.log(object2);
console.log('object1 === object2', object1 === object2);

const object3 = Object.assign({ c: 'c' }, object1);
// const object3 = Object.assign({}, object1, { c: 'c' });

console.log(object3);
console.log('object1 === object3', object1 === object3);

console.log('\n');

// ----- Set, Map -----
console.log('Set, Map: ');
const set1 = new Set([0, 1, 2, 3, 3]);
console.log(set1);

const map1 = new Map([[0, '0'], [1, '1']]);
console.log(map1);

console.log('\n');

// ---- Math, JSON -----
console.log('Math, JSON: ');
console.log('Math.random: ', Math.random());

const json = JSON.stringify(object1);
console.log('json: ', json);
const object4 = JSON.parse(json);
console.log('parse: ', object4);
console.log('object1 === object4', object1 === object4);

console.log('\n');

// ----- quiz -----
console.log('quiz: ');
// Hint: Array.prototype.reduce
// Return: [
//   { source: 0, target: 1 },
//   { source: 1, target: 2 },
//   { source: 2, target: 3 },
//   { source: 3, target: 4 },
//   { source: 4, target: 5 },
// ];
const array = [0, 1, 2, 3, 4, 5].reduce((result) => result, []);

console.log('array: ', array);
