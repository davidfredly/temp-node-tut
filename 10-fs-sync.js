// Interact with file system
// modulen fs

const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


writeFileSync(
    './content/result-sync.txt',
    `\nHere is the result:\n${first}\n${second}\n`,
    {flag: 'a'}
)

console.log('done with this task');
console.log('starting the next one');

// console.log(first);
// console.log(second);