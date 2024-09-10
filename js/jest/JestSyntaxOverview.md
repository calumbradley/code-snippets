
# JestSyntaxOverview

Jest is a powerful testing framework for JavaScript that allows for writing unit tests in a clean and organized way. This concise guide covers the basic syntax for using Jest effectively.

## Test Suite

Use `describe()` to group related test cases together. This makes it easier to organize and manage tests.

```javascript
describe('My Test Suite', () => {
  // Test cases go here
});
```

### Example:

```javascript
describe('Math functions', () => {
  // individual tests for math functions go here
});
```

## Test Case

A single **test case** is written using either `test()` or `it()`. Both are equivalent and can be used interchangeably.

```javascript
test('should add numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
});
```

or

```javascript
it('should subtract numbers correctly', () => {
  expect(subtract(5, 3)).toBe(2);
});
```

## Assertions

Jest uses the `expect()` function for assertions. Below are common assertion methods:

- `toBe()`: Checks strict equality.
  ```javascript
  expect(value).toBe(5);
  ```

- `toEqual()`: Checks deep equality for objects or arrays.
  ```javascript
  expect(object).toEqual({ key: 'value' });
  ```

- `toContain()`: Verifies if an array or iterable contains an item.
  ```javascript
  expect([1, 2, 3]).toContain(2);
  ```

## Mock Functions

Mock functions are useful for simulating behavior.

```javascript
const mockFunc = jest.fn();

mockFunc();
expect(mockFunc).toHaveBeenCalled();
```

## Asynchronous Testing

For asynchronous code, you can return a promise or use `async` and `await`.

### Using Promises:
```javascript
test('should resolve promise', () => {
  return fetchData().then(data => {
    expect(data).toBe('some value');
  });
});
```

### Using Async/Await:
```javascript
test('should fetch data asynchronously', async () => {
  const data = await fetchData();
  expect(data).toBe('some value');
});
```
