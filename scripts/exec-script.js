const [_pathToNode, _pathToScript, ...args] = process.argv;
const [key] = args;

const path = require('path');
const fs = require('fs');

const rootPath = path.join(__dirname, '..');
const problemsPath = path.join(rootPath, 'problems');

const fileMap = new Map();

const filenames = fs.readdirSync(problemsPath);

filenames.forEach(function (file) {
  fileMap.set(file.split('-')?.[0], file);
});

const filePath = fileMap?.get(key);
const targetPath = path.join(problemsPath, filePath);

const { exec } = require('child_process');

exec(`node ${targetPath}/main.js`, (err, stdout, stderr) => {
  console.log(stdout);
});