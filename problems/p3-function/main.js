// ----- Function -----
function doA() {
  // ...
};

const doB = function() {
  // ...
};

const doC = () => {
  // ...
};

doA();
doB();
doC();

// ----- Assigning a function to a variable -----
function returnSomething() {
  return 'something';
}

const result = returnSomething();

console.log('returnSomething: ', result);

// ----- Passing a function as an argument -----
const arr = [1, 2, 3].map((item) => item * 2);

/**
 * Applies a callback function to each element in an array and returns a new array
 *
 * @param {Array<number>} array - The array to be mapped
 * @param {function} callback - The callback function to apply to each element in the array
 * @return {Array<number>}
 */
function customMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const newArr = customMap([1, 2, 3], (item) => {
  return item * 2
});

console.log('arr: ', arr);
console.log('newArr: ', newArr);

// ----- Returning a function from a function -----

function returnFunction() {
  return function () {
    // do something...
  };
};

const curryFunc = (args) => {
  return (callback) => {
    return callback(args[0], args[1]);
  }
};

const curriedFunc = curryFunc([1, 2]);
let plus = (a, b) => {
  return  a+b 
};
let minus = (a,b) => {
  return a-b
};
let multiply = (a, b) => {
  return a*b
};
let divide = (a,b) => {
  return a/b
};

console.log('plus: ', curryFunc([1,2])(plus));
console.log('minus: ',  curryFunc([1,2])(minus));
console.log('multiply: ',  curryFunc([1,2])(multiply));
console.log('divide: ', curryFunc([1,2])(divide));


