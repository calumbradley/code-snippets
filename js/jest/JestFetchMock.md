'''javascript
import { render, screen, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent'; // Your React component

// Mock fetch before each test
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ key: 'value' }), // Mock the JSON response
    })
  );
});

// Clean up after each test
afterEach(() => {
  global.fetch.mockClear();
});

// The test case
test('fetches and displays data on first render', async () => {
  // Render the component, which triggers the useEffect fetch call
  render(<MyComponent />);

  // Wait for the fetch data to be rendered
  await waitFor(() => expect(screen.getByText(/value/i)).toBeInTheDocument());

  // Check that fetch was called once
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
'''