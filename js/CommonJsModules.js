# CommonJS Module Import and Export Examples

This file demonstrates various ways to use CommonJS imports and exports in Node.js.

## 1. Basic Export and Import Example (`math.js`)

```js
// Exporting a function and a variable
function add(a, b) {
  return a + b;
}

const PI = 3.1415;

module.exports = {
  add,
  PI,
};
```

## Exporting a function directly

```js
module.exports = function log(message) {
  console.log(message);
};
```

## Exporting multiple values (functions)

```js
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
```

## Importing specific parts and renaming

```js
const { formatDate: format, greet: sayHello } = require('./utils');

console.log(format(new Date()));      // Alias `format`
console.log(sayHello('Alice'));       // Alias `sayHello`
```

## Exporting a class

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

module.exports = Person;
```

## Exporting an object directly

```js
module.exports = {
  port: 3000,
  db: 'mongodb://localhost/myapp',
};
```

## Exporting a value based on the environment
```js
let dbConnection;

if (process.env.NODE_ENV === 'production') {
  dbConnection = 'mongodb://prod_db:27017/myapp';
} else {
  dbConnection = 'mongodb://localhost:27017/myapp';
}

module.exports = dbConnection;
```

## Importing Node's built-in File System module
```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```