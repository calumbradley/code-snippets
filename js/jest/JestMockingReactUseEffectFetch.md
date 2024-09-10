
# Mocking useEffect Fetch Response in React with Jest

This guide explains how to mock a `useEffect` hook that makes a fetch request in a React component using Jest. Instead of mocking `useEffect` directly, you mock the fetch request. Here's a step-by-step example of how to achieve this.

## Example Setup:

Let's assume you have a component that uses `useEffect` to fetch data when the component mounts.

### Component (MyComponent.js):

```jsx
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;
```

## Testing with Jest (MyComponent.test.js):

1. **Mock the `fetch` API**: Jest provides a way to mock global functions like `fetch`. You can use `jest.fn()` or `jest.spyOn` to mock it.
2. **Simulate the response**: Use `Promise.resolve()` to simulate a successful API call that returns the desired response.
3. **Test the behavior**: After mocking, assert that the component correctly handles the data.

```jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent';

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Hello from mock API' }),
  })
);

describe('MyComponent', () => {
  afterEach(() => {
    // Clear the mock after each test to avoid interference between tests
    jest.clearAllMocks();
  });

  test('renders the fetched data', async () => {
    // Render the component
    render(<MyComponent />);

    // Check that loading message is displayed initially
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for the component to re-render with fetched data
    await waitFor(() => expect(screen.getByText(/Hello from mock API/i)).toBeInTheDocument());
  });
});
```

## Explanation:

1. **Mocking `fetch`**: The `fetch` function is mocked globally and it resolves with a JSON response that contains `{ message: 'Hello from mock API' }`.
2. **Rendering the Component**: The component is rendered and `useEffect` triggers the fetch call.
3. **Asserting the Loading State**: Since the API call is asynchronous, the component initially renders with a loading message.
4. **Asserting the Fetched Data**: Using `waitFor`, we wait for the component to update after the fetch call completes, then we check if the mock data is displayed.

This method ensures the fetch request is properly mocked and the test remains isolated and deterministic.
