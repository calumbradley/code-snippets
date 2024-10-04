### What is `jest.spyOn()`?

`jest.spyOn()` lets you **watch** a function and see how it behaves when your code runs. It doesn't change how the function works by default, but it gives you tools to check things like:

- Was the function called?
- How many times was it called?
- What arguments were passed when it was called?

You can also **temporarily change** what the function does using `jest.spyOn()` during a test, and then reset it back to normal afterward.

### Example with `fetch`

Let's say you have some code that calls the `fetch` function to get data from the internet. You want to test that your code is calling `fetch` correctly, but you don't want it to actually go to the internet during the test (because it's slow, or you want to control the result). You can use `jest.spyOn()` to **mock** (temporarily change) how `fetch` behaves during your test.

Here’s a step-by-step explanation using a simple example:

#### Code You Are Testing (Example)

```js
function fetchData() {
  return fetch('https://example.com')
    .then(response => response.json())
    .then(data => data);
}
```

This function uses `fetch` to get some data from an API.

#### Writing the Test

In the test, we want to **mock** the `fetch` function so that:
1. It doesn’t actually go to the internet.
2. It gives us fake data that we can control for the test.

Here’s how you do that using `jest.spyOn()`:

```js
describe('fetchData function', () => {
  beforeEach(() => {
    // Spy on the global fetch function and mock what it returns during the test
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'fake data' }),
      })
    );
  });

  afterEach(() => {
    // Restore the original fetch function after the test
    global.fetch.mockRestore();
  });

  it('should fetch data from the API', async () => {
    const data = await fetchData();

    // Check that fetch was called once
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Check that fetch was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith('https://example.com');

    // Check that the function got the "fake data" we mocked
    expect(data).toEqual({ data: 'fake data' });
  });
});
```

#### What’s Happening in the Test

1. **`jest.spyOn(global, 'fetch')`:**
   - This creates a "spy" on the `fetch` function. A spy watches what happens to the function, like how many times it's called and with what arguments.
   
2. **`mockImplementation(() => ...)`:**
   - This changes (mocks) what `fetch` does just for this test. Instead of going to the internet, it returns a fake response: a Promise that resolves with `{ data: 'fake data' }`. This way, your test has control over the response from `fetch`.

3. **`global.fetch.mockRestore()`:**
   - After the test is done, we use `mockRestore()` to reset `fetch` back to its normal behavior. This is important because we don’t want the mock version to affect other tests.

4. **Assertions (the `expect` lines):**
   - We check if `fetch` was called, what URL it was called with, and whether the data returned by `fetchData` is what we expected (the "fake data").

#### Why Use `jest.spyOn()`?

- **You can track function calls.** You can see if a function like `fetch` was called correctly in your code.
- **You can mock the function's behavior.** In the test, `fetch` doesn’t go to the internet. It just returns fake data that you can control.
- **You can restore the function.** After the test, the real `fetch` function works as normal again, so it doesn’t affect other tests.

### A Simple Analogy

Think of `jest.spyOn()` like a security camera for a function. You set up the camera to watch how many times someone (the function) opens a door (gets called). But while the camera is watching, you can also put a "fake door" there that doesn't actually lead anywhere (mocking the function’s behavior). After you're done, you can remove the fake door and everything goes back to normal.