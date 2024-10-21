## Example: Calculate the Difference Between a Date and Time with Days, Hours, and Minutes

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

  // Calculate days, hours, and minutes
  const daysAgo = Math.floor(differenceInMinutes / (60 * 24));
  const hoursAgo = Math.floor((differenceInMinutes % (60 * 24)) / 60);
  const minutesAgo = differenceInMinutes % 60;

  if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (hoursAgo > 0) {
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else {
    return `${differenceInMinutes} minute${differenceInMinutes !== 1 ? 's' : ''} ago`;
  }
}

// Example usage:
const date = "2024-10-19"; // Example date (two days ago)
const time = "09:15:00";   // Example time
const result = getTimeDifferenceFromDateTime(date, time);
console.log(result); // Output will depend on the current time