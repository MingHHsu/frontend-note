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

function execPromiseCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.log(stderr);
        reject();
      }
      console.log(stdout);
      resolve();
    });
  })
}

async function main() {
  try {

    if (filePath.endsWith('-ts')) {
      await execPromiseCommand(`npx tsc`);
      await execPromiseCommand(`node ./dist/${filePath}/main.js`);
    } else {
      await execPromiseCommand(`node ${targetPath}/main.js`);
    }

  } catch (error) {
    console.log(error);
  }
}

main();
