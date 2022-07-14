const { createFile, createFileAsync } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(process.argv);

// const [, , arg3 = 'base=5'] = process.argv;
// // console.log(arg3);
// const [, base] = arg3.split('=');
// console.log(base);

// console.log(process.argv);
// console.log('colors'.trap);

// console.log('yargs(base): ', argv.b);
// console.log('yargs(list): ', argv.l);

// const base = 5;

// createFile(base)
//     .then(fileName => console.log(`File ${fileName} created`))
//     .catch(error => console.log(error));

createFileAsync(argv)
    .then(fileName => console.log(`File ${fileName} created`.magenta.underline))
    .catch(error => console.log(error));