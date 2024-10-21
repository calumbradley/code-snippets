## Example: Return Time Difference in Hours and Minutes or the Time String if in the Future

```javascript
function getTimeDifferenceInHoursAndMinutes(dateString, timeString) {
  const now = new Date(); // Get the current date and time

  // Create a Date object from the provided date and time
  const [hours, minutes, seconds] = timeString.split(':').map(Number); // Split time and convert to numbers
  const pastDate = new Date(dateString); // Create a Date object from the provided date
  pastDate.setHours(hours, minutes, seconds, 0); // Set the time from the string

  // Check if the pastDate is in the future compared to now
  if (pastDate > now) {
    return timeString; // Just return the time string if it's in the future
  }

  // Get the difference in milliseconds
  const differenceInMs = now - pastDate;

  // Convert the difference to minutes
  const differenceInMinutes = Math.floor(differenceInMs / 1000 / 60);

  // If the difference is more than 60 minutes, calculate hours and minutes
  const hoursAgo = Math.floor(differenceInMinutes / 60);
  const minutesAgo = differenceInMinutes % 60;

  if (hoursAgo > 0) {
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else {
    return `${differenceInMinutes} minute${differenceInMinutes !== 1 ? 's' : ''} ago`;
  }
}

// Example usage:
const date = "2024-10-21"; // Example date
const time = "08:30:00";   // Example time in the past
const result = getTimeDifferenceInHoursAndMinutes(date, time);
console.log(result); // Output will show the difference in hours and minutes or the time string if in the future