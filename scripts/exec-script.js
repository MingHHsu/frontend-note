import fs from 'fs';
import path, { dirname } from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

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

exec(`node ${targetPath}/main.js`, (err, stdout, stderr) => {
  if (err) {
    console.log(stderr);
  }
  console.log(stdout);
});