## Example: Calculate the Difference Between a Date and Time, Handling Future Times

```javascript
function getTimeDifferenceFromDateTime(dateString, timeString) {
  const now = new Date(); // Get the current date and time
  
  // Create a Date object from the provided date and time
  const [hours, minutes, seconds] = timeString.split(':').map(Number); // Split time and convert to numbers
  const pastDate = new Date(dateString); // Create a Date object from the provided date
  pastDate.setHours(hours, minutes, seconds, 0); // Set the time from the string

  // Check if the pastDate is in the future compared to now
  if (pastDate > now) {
    return "The provided time is in the future.";
  }

  // Get the difference in milliseconds
  const differenceInMs = now - pastDate;

  // Convert the difference to minutes
  const differenceInMinutes = Math.floor(differenceInMs / 1000 / 60);

  return `${differenceInMinutes} minutes ago`;
}

// Example usage:
const date = "2024-10-21"; // Example date
const time = "10:52:35";   // Example time
const result = getTimeDifferenceFromDateTime(date, time);
console.log(result); // Output will depend on the current time