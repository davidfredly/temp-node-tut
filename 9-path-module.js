const path = require('path');

console.log(path.sep);

// sökväg till fil i appen
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// filnamn
const base = path.basename(filePath);
console.log(base);

// Hela sökvägen
const absoulue = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absoulue);