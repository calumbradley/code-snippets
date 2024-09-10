
# Running Jest With Code Coverage

## Prerequisites

Ensure you have Jest installed in your project. If not, you can install it using:

```bash
npm install --save-dev jest
```

## Current `package.json` Script

If your `package.json` has the following script:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

You can run Jest with coverage in the following ways:

### Option 1: Running Coverage Manually

You can manually run Jest with the `--coverage` option without modifying the `package.json`:

```bash
npm test -- --coverage
```

> **Note**: The `--` is used to pass additional arguments (like `--coverage`) to the script defined in `package.json`.

### Option 2: Adding Coverage to the Test Script

You can modify the `test` script in your `package.json` to always include coverage:

```json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

Now, when you run `npm test`, it will automatically generate a coverage report.

### Option 3: Adding a Separate Script for Coverage

If you want to keep the original `test` script and add a separate one for coverage, modify `package.json` like this:

```json
{
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage"
  }
}
```

This way, you can:

- Run regular tests with: 
  ```bash
  npm test
  ```

- Run tests with coverage using:
  ```bash
  npm run test:coverage
  ```

## Viewing Coverage

After running tests with coverage, Jest generates a coverage report in the `coverage` folder. To view a detailed HTML report:

1. Navigate to the `coverage` directory in your project.
2. Open `index.html` in a web browser.

This report provides detailed information about which parts of your code are covered by tests.
