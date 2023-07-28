import fs from 'fs';
import path, { dirname } from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { promisify } from 'util'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const [_pathToNode, _pathToScript, ...args] = process.argv;
const [key] = args;

const rootPath = path.join(__dirname, '..');
const problemsPath = path.join(rootPath, 'problems');

const fileMap = new Map();

const filenames = fs.readdirSync(problemsPath);

filenames.forEach(function (file) {
  fileMap.set(file.split('-')?.[0], file);
});

const filePath = fileMap?.get(key);
const targetPath = path.join(problemsPath, filePath);

// async function run1() {
//   if (filePath === 'p8-practice') {
//     await new Promise((resolve, reject) => {
//       exec(`npx tsc`, (err, stdout, stderr) => {
//         if (err) {
//           console.log(stderr);
//           reject();
//         }
//         console.log(stdout);
//         resolve();
//       });
//     });

//     await new Promise((resolve, reject) => {
//       exec(`node ./dist/main.js`, (err, stdout, stderr) => {
//         if (err) {
//           console.log(stderr);
//           reject();
//         }
//         console.log(stdout);
//         resolve();
//       });
//     });
//   } else {
//     await new Promise((resolve, reject) => {
//       exec(`node ${targetPath}/main.js`, (err, stdout, stderr) => {
//         if (err) {
//           console.log(stderr);
//           reject();
//         }
//         console.log(stdout);
//         resolve();
//       });
//     });
//   }
// }
// run1()





async function run2() {

  const commands = [
    { condition: filePath === 'p8-practice', command: `npx tsc` },
    { condition: filePath === 'p8-practice', command: `node ./dist/main.js` },
    { condition: filePath !== 'p8-practice', command: `node ${targetPath}/main.js` },
  ];
  const promiseArray = [];
  commands.forEach(({ condition, command }) => {
    if (condition) {
      console.log(command)
      const p = new Promise((resolve, reject) => exec(command, (err, stdout, stderr) => {
        if (err) {
          reject(stderr);
        }
        resolve(stdout);
      })).then((value) => {
        console.log(value)
      }).catch((err) => {
        console.log(err)
      })
      promiseArray.push(p);
    }
  })
  await Promise.all(promiseArray);

  for (const { condition, command } of commands) {
    if (condition) {
      let result = ''
      try {
        result = await new Promise((resolve, reject) => {
          console.log(command)
          exec(command, (err, stdout, stderr) => {
            if (err) {
              reject(stderr);
            }
            resolve(stdout);
          });
        });
      } catch (error) {
        console.log(error);
        return
      }
      console.log(result);
    }
  }

}

run2()















async function runCommands() {

  const execPromise = promisify(exec);

  const executeCommand = async (command) => {
    try {
      const { stdout, stderr } = await execPromise(command);
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    } catch (error) {
      console.error(`執行命令時出錯: ${error.message}`);
    }
  };

  const executeCommandIfConditionMet = async (result, { condition, command }) => {
    if (condition) {
      await executeCommand(command);
    }
  };

  await commands.reduce(executeCommandIfConditionMet, null);
}

// runCommands();