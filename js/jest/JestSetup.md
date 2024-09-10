# Setting up Jest for Testing in Node.js

1. Install Node.js and Jest

Create a new directory for your project and initialize it:

```bash
mkdir my-jest-app
cd my-jest-app
npm init -y
```

Now, install Jest as a development dependency:

```bash
npm install jest --save-dev
```

2. Create a sum.js File

Create a simple module called sum.js which exports a function that adds two numbers:

```js
// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

3. Create an app.js File

In your main entry file app.js, import the sum function using CommonJS and call it:

```js
// app.js
const sum = require("./sum");

const result = sum(5, 3);
console.log(`The sum of 5 and 3 is ${result}`);
```

4. Create a Test File sum.test.js

Now, create a separate test file called sum.test.js in the root of your project. This file will contain test cases for the sum function.

```js
// sum.test.js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 5 + 7 to equal 12", () => {
  expect(sum(5, 7)).toBe(12);
});
```

5. Update package.json for Jest

In your package.json, add the following script to run Jest:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

6. Run the Test

To run the tests, use the following command in your terminal:

```bash
npm test
```

If everything is set up correctly, you should see the test results showing that the tests passed successfully.

Expected Output (after running npm test):

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (Xms)
✓ adds 5 + 7 to equal 12 (Xms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        Xs
```
