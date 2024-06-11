// Globala variabler kan alltid nås från var som helst i appen.
// Globala variabler i Node (det finns flera).
// __dirname  - path to current directory (mapp)
// __filename - file name
// require    - funktion för att använda moduler (CommonJS)
// module     - info om (current) modul (file)
// process    - info om env (miljö) där programmet exekveras

// console.log('dir:', __dirname);
// console.log('file:', __filename);

// console.log(__dirname);

setInterval(() => {
    console.log('Hello world');
}, 1000)
