# CommonJS Module Import and Export Examples

This file demonstrates various ways to use CommonJS imports and exports in Node.js.

```js
// 1. Basic Export and Import Example (math.js)

// Exporting a function and a variable
function add(a, b) {
  return a + b;
}

const PI = 3.1415;

module.exports = {
  add,
  PI,
};

// ----------------------------------------
// 2. Single Value Export (logger.js)

// Exporting a function directly
module.exports = function log(message) {
  console.log(message);
};

// ----------------------------------------
// 3. Named Exports (utils.js)

// Exporting multiple values (functions)
const formatDate = (date) => {
  return date.toISOString();
};

const greet = (name) => {
  return `Hello, ${name}!`;
};

module.exports = {
  formatDate,
  greet,
};

// ----------------------------------------
// 4. Aliasing Imports Example (in app.js)

// Importing specific parts and renaming
const { formatDate: format, greet: sayHello } = require('./utils');

console.log(format(new Date()));      // Alias `format`
console.log(sayHello('Alice'));       // Alias `sayHello`

// ----------------------------------------
// 5. Class Export Example (Person.js)

// Exporting a class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

module.exports = Person;

// ----------------------------------------
// 6. Exporting a Default Object Example (config.js)

// Exporting an object directly
module.exports = {
  port: 3000,
  db: 'mongodb://localhost/myapp',
};

// ----------------------------------------
// 7. Conditional Export Example (db.js)

// Exporting a value based on the environment
let dbConnection;

if (process.env.NODE_ENV === 'production') {
  dbConnection = 'mongodb://prod_db:27017/myapp';
} else {
  dbConnection = 'mongodb://localhost:27017/myapp';
}

module.exports = dbConnection;

// ----------------------------------------
// 8. Importing Built-in Modules Example (app.js)

// Importing Node's built-in File System module
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ----------------------------------------
// 9. Circular Dependencies Example (fileA.js and fileB.js)

// fileA.js
const fileB = require('./fileB');
console.log('fileA loaded');
module.exports = 'This is fileA';

// fileB.js
const fileA = require('./fileA');
console.log('fileB loaded');
module.exports = 'This is fileB';