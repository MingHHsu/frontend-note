import fs from 'fs';
import path from 'path';

const dirname = path.resolve();

// blocking
const file = fs.readFileSync(`${dirname}/reveal-slide.md`); // 在這邊等好幾秒才往下執行
console.log('readFileSync: ', file);


// non-blocking
fs.readFile(`${dirname}/reveal-slide.md`, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('readFile: ', data)
  }
});

const arr = [];
for (let i = 2; i <= 99999999; i+=2) {
  arr.push(i);
}
  
console.log(arr);