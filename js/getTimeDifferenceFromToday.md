function getTimeDifferenceSimple(dateString, timeString) {
  const now = new Date();
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  const pastDate = new Date(dateString);
  pastDate.setHours(hours, minutes, seconds, 0);

  if (pastDate > now) {
    return timeString;
  }

  const differenceInMs = now - pastDate;
  const differenceInMinutes = Math.floor(differenceInMs / 1000 / 60);
  const hoursAgo = Math.floor(differenceInMinutes / 60);

  if (hoursAgo > 0) {
    return `-${hoursAgo} hour${hoursAgo > 1 ? 's' : ''}`;
  } else {
    return `-${differenceInMinutes} minute${differenceInMinutes !== 1 ? 's' : ''}`;
  }
}

// Example usage:
const date = "2024-10-21";
const time = "08:30:00";
const result = getTimeDifferenceSimple(date, time);
console.log(result);