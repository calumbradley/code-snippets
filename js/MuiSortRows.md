```javascript
// Example JSON data with expectedDate and expectedTime
const rows = [
  {
    platform: "AWS",
    expectedDate: "2024-10-20",
    expectedTime: "10:00:00",
    status: "active",
  },
  {
    platform: "Azure",
    expectedDate: "2024-10-19",
    expectedTime: "12:30:00",
    status: "inactive",
  },
  {
    platform: "GCP",
    expectedDate: "2024-10-18",
    expectedTime: "03:45:00",
    status: "active",
  },
];

// Step 1: Filter the Data
const statusFilter = "active"; // Example: filter by 'active' status
const filteredRows = rows.filter((row) => row.status === statusFilter);

// Step 2: Create a Helper Function to Combine expectedDate and expectedTime
function createDateTimeObject(expectedDate, expectedTime) {
  // 'hh:mm:ss' format will work directly with the Date constructor
  return new Date(`${expectedDate}T${expectedTime}`);
}

// Step 3: Sorting Logic (Comparator)
function descendingComparator(a, b) {
  const dateA = createDateTimeObject(a.expectedDate, a.expectedTime);
  const dateB = createDateTimeObject(b.expectedDate, b.expectedTime);

  if (dateA < dateB) {
    return -1;
  }
  if (dateA > dateB) {
    return 1;
  }
  return 0;
}

// Step 4: Function to Toggle Sorting Order
function getComparator(order) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b)
    : (a, b) => -descendingComparator(a, b);
}

// Step 5: Sort the Filtered Data
const displayRows = filteredRows.slice().sort(getComparator("asc")); // 'asc' or 'desc' for sorting order

console.log(displayRows);
```
