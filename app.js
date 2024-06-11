// installera paket/dependencies lokalt
// npm i <packageName>

// installera paket/dependencies globalt
// sudo npm i -g <packageName>

// package.json
// manifest-fil som lagrar viktig info om projekt/paket.
// kan skapas manuellt i root
// kan skapas med npm init (step by step, enter to skip)
// kan skapas med npm init -y (everything default)




const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems);