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
const array = [0, 1, 2, 3, 4, 5].reduce((result, item, index, arr) => {
    console.log(result, item, index);
    if (index < arr.length - 1) {
        result.push({ source: index, target: index + 1 });
        console.log(result)
    }
    return result;
}, []);





// const array = [0, 1, 2, 3, 4, 5].reduce((result, item, index, arr) => {
//     if (index < arr.length - 1) {
//         console.log(arr[0]);
//         result.push({ source: item, target: arr[item + 1] });
//     }
//     return result;
// }, []);

console.log('array: ', array);

// const array2 = [0, 1, 2, 3, 4, 5].filter((item, index, arr) => {

//     return item % 2 == 0
// })

// console.log('array2: ', array2);

// const arr = [1, 2, 3, 4, 5];
// const reduceArrNoInitValue = arr.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue
// });
// console.log('reduceArrNoInitValue: ', reduceArrNoInitValue);


// const reduceArrInitValue = arr.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue
// }, 0);
// console.log('redureduceArrInitValueceArr: ', reduceArrInitValue);

// const arrMerge = [['a', 'b'], ['c', 'd'], ['e', 'f']];

// const mergedArr = arrMerge.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator.concat(currentValue)
// })

// console.log('mergedArr: ', mergedArr);

// const arrCount = ['a', 'a', 'b', 'c', 'c', 'c', 'e'];
// const reduceArr = arrCount.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     if (accumulator[currentValue]) {
//         console.log('before', accumulator[currentValue]);
//         accumulator[currentValue]++;
//         console.log('after', accumulator[currentValue]);
//     } else {
//         accumulator[currentValue] = 1;
//     }
//     return accumulator;
// }, {});
// console.log(reduceArr); // { a: 2, b: 1, c: 3, e: 1 }

// const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
// const calArray = [115, 26, 99]
// const calArr = calArray.reduce((accumulator, currentValue, index, arr) => {
//     console.log(accumulator, currentValue, index, arr);
//     // implement reduce function to calculate min, max, average
//     const result = { max: Math.max(...arr), min: Math.min(...arr), average: average(currentValue, arr) }
//     console.log(result)
//     return result
// }, {})
// console.log(calArr);


const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, curr, index, array) => {
    // Calculate the maximum
    acc.max = Math.max(acc.max || curr, curr);

    // Calculate the minimum
    acc.min = Math.min(acc.min || curr, curr);

    // Calculate the sum
    acc.sum = (acc.sum || 0) + curr;


    // Calculate the average
    // only when last element is reached, then we can calculate the average
    if (index === array.length - 1) {
        acc.average = acc.sum / array.length;
    }
    // console.log(acc)
    return acc;
});

console.log(result);



// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((acc, curr, index, array) => {
//     if (index === 0) {
//         // set init value
//         acc.max = curr;
//         acc.min = curr;
//         acc.sum = curr;
//     } else {
//         // Calculate the maximum
//         acc.max = Math.max(acc.max, curr);

//         // Calculate the minimum
//         acc.min = Math.min(acc.min, curr);

//         // Calculate the sum
//         acc.sum += curr;
//     }
//     // Calculate the average
//     if (index === array.length - 1) {
//         acc.average = acc.sum / array.length;
//     }
//     return acc;
// }, {});

// console.log(result);