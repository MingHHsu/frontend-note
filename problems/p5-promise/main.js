// ----- Callback hell -----
console.log('callback hell:');
function doA(cb) {
  let dataA;
  console.log('get dataA');
  cb(dataA);
}

function doB(dataA, cb) {
  let dataB;
  console.log('get dataB by dataA');
  cb(dataB);
}

function doC(dataB, cb) {
  let dataC;
  console.log('get dataC by dataB');
  cb(dataC);
}

doA(function (dataA) {
  doB(dataA, function (dataB) {
    doC(dataB, function (dataC) {
      console.log('do something');
    });
  });
});
console.log('\n');

// ----- Promise -----
console.log('promise: ');
function doPromiseA(text) {
  console.log('promiseA');
  return new Promise((resolve) => resolve(text));
}

function doCallbackB(dataA) {
  console.log('callbackB');
}

function doCallbackC(dataB) {
  console.log('callbackC');
}

doPromiseA('A')
  .then(doCallbackB)
  .then(doCallbackC)
  .catch(() => console.log('error'));

// ----- Async/await -----
console.log('async/await: ');

function doPromiseB(text) {
  console.log('promiseB');
  return new Promise((resolve) => resolve(text));
}

function doPromiseC(text) {
  console.log('promiseC');
  return new Promise((resolve) => resolve(text));
}


async function asyncFunc() {
  try {
    const dataA = await doPromiseA('A');
    const dataB = await doPromiseB(dataA);
    const dataC = await doPromiseC(dataB);
  } catch (error) {
    console.log(error);
  }
};

console.log(asyncFunc());
