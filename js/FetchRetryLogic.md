# Handling HTTP 413 Responses with Retry Logic in Node.js

### Overview:

This JavaScript code demonstrates how to handle an HTTP `413 Payload Too Large` response when making a fetch request to a localhost endpoint (`http://localhost:8711`). The logic waits for 30 seconds after receiving a `413` response and retries the request. It uses `fetch()` for the HTTP request and promises for handling asynchronous operations.

### Step-by-Step Breakdown:

### 1. **The `fetchWithRetry()` Function**:

- The `fetchWithRetry` function is defined to handle the fetch request and retry logic if necessary.
- The `url` constant is set to store the URL of the local endpoint (`http://localhost:8711`).

### 2. **First Fetch Request**:

- The function initiates the first fetch request with `fetch(url)` and returns a promise.
- When the promise resolves, the `.then()` block receives the `response`.

### 3. **Check for `413 Payload Too Large` Response**:

- The first `.then()` block checks if `response.status === 413`. This checks whether the server has responded with a `413 Payload Too Large` status, which typically indicates the request body is too large for the server to process.
- If the response status is `413`, a message is logged (`Received 413 response, waiting 30 seconds before retrying...`).

### 4. **30-Second Wait Before Retry**:

- The function creates a new `Promise` with a `setTimeout` call to introduce a 30-second delay before retrying the request. The promise resolves after the timeout.

### 5. **Second Fetch Request (Retry)**:

- After the 30-second wait, a second `fetch(url)` request is made to retry the request.
- If the first request does not result in a `413` response, this retry logic is skipped.

### 6. **Handling a Successful Response**:

- If the first request (or the second, in case of a retry) results in a successful response (`response.ok`), the `.then()` block processes the response.
- The successful response is processed by calling `response.json()` to parse the JSON data from the body of the HTTP response.

### 7. **Handle Non-Successful Responses**:

- If the response is neither successful (`response.ok`) nor a `413` status, an error is thrown with a message that includes the response status (`Fetch failed with status: ${response.status}`).

### 8. **Catch Block for Errors**:

- If any error occurs during the fetch request (either due to a failed response or a network error), the `.catch()` block at the end of `fetchWithRetry()` logs the error (`Error during fetch operation`) and rethrows the error for further handling.

### 9. **Calling the `fetchWithRetry()` Function**:

- After defining the function, it is immediately called.
- The `.then()` block following `fetchWithRetry()` processes the resolved data. If data is returned, it logs the final data. If no data is received, it logs `Failed to fetch data.`.
- If any error propagates from the `fetchWithRetry()` call (due to a failed fetch or an error being thrown), it is caught by the `.catch()` block, which logs `Fetch operation failed` and the error message.

### Error Propagation and Control Flow:

- If the first fetch results in a `413`, a 30-second delay is introduced, followed by a second attempt.
- If the second attempt fails (due to a bad status or network error), the error is caught in the final `.catch()` block and logged.
- If the first fetch is successful, no second request is made, and the data is processed immediately.
- Any non-`200` status or network failure will result in an error being thrown and will be caught by the outer `.catch()` blocks.

### Conclusion:

This code retries an HTTP request if the response status is `413`, with a delay of 30 seconds. It handles errors and retries effectively, using promise chaining for asynchronous control flow and response management.

### Code for Reference:

```javascript
// Function to perform the fetch request with promise chaining
function fetchWithRetry() {
  const url = "http://localhost:8711"; // Your local endpoint

  // First fetch request
  return fetch(url)
    .then((response) => {
      if (response.status === 413) {
        console.log(
          "Received 413 response, waiting 30 seconds before retrying..."
        );

        // Wait for 30 seconds before retrying
        return new Promise((resolve) => {
          setTimeout(resolve, 30000);
        }).then(() => {
          // Second fetch request after waiting 30 seconds
          return fetch(url);
        });
      } else if (response.ok) {
        // If the first response is successful, resolve immediately
        return response;
      } else {
        throw new Error(`Fetch failed with status: ${response.status}`);
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse the response data
      } else {
        throw new Error(`Fetch failed with status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("Response data:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error during fetch operation:", error);
      throw error; // Re-throw the error if something goes wrong
    });
}

// Call the function to perform the fetch with retry logic
fetchWithRetry()
  .then((data) => {
    if (data) {
      console.log("Final data:", data);
    } else {
      console.log("Failed to fetch data.");
    }
  })
  .catch((err) => {
    console.error("Fetch operation failed:", err);
  });
```
