import fs from 'fs';
import path from 'path';
import { promisify } from 'util'
const dirname = path.resolve();

// blocking
const file = fs.readFileSync(`${dirname}/reveal-slide.md`); // 在這邊等好幾秒才往下執行
console.log('readFileSync: ', file);


const readFile = promisify(fs.readFile)
// non-blocking
const result = readFile(`${dirname}/reveal-slide.md`, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('readFile: ', data)
    fs.readFile(`${dirname}/reveal-slide.md`,)
  }
}).then(data => {
  console.log('promisify: ', data)
  return data
}).catch(err => {
  console.log(err)
})
