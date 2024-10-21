## Example: Calculate the Difference When Time is Passed as `"10:52:35"`

```javascript
function getTimeDifferenceFromToday(timeString) {
  const now = new Date(); // Get the current date and time
  const [hours, minutes, seconds] = timeString.split(':').map(Number); // Split time and convert to numbers

  // Create a new Date object with today's date but the provided time
  const pastDate = new Date(now); // Start with the current date
  pastDate.setHours(hours, minutes, seconds, 0); // Set the time from the string

  // Get the difference in milliseconds
  const differenceInMs = now - pastDate;

  // Convert the difference to various units
  const differenceInMinutes = Math.floor(differenceInMs / 1000 / 60);

  return differenceInMinutes;
}

// Example usage:
const time = "10:52:35"; // Time string (e.g., today's time earlier in the day)
const minutesAgo = getTimeDifferenceFromToday(time);
console.log(`${minutesAgo} minutes ago`);