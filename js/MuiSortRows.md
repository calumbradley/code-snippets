
# Filtering And Sorting By ExpectedDate And ExpectedTime

This component filters data based on the `status` field using a select box and sorts the filtered data based on `expectedDate` and `expectedTime`.

## Full Component Code

```jsx
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Example JSON data with expectedDate and expectedTime
const rows = [
  { platform: 'AWS', expectedDate: '2024-10-20', expectedTime: '10:00:00', status: 'active' },
  { platform: 'Azure', expectedDate: '2024-10-19', expectedTime: '12:30:00', status: 'inactive' },
  { platform: 'GCP', expectedDate: '2024-10-18', expectedTime: '03:45:00', status: 'active' },
];

// Helper function to create a Date object from expectedDate and expectedTime
function createDateTimeObject(expectedDate, expectedTime) {
  return new Date(`${expectedDate}T${expectedTime}`);
}

// Comparator function for sorting by expectedDate and expectedTime
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

// Function to toggle sorting order (ascending or descending)
function getComparator(order) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b)
    : (a, b) => -descendingComparator(a, b);
}

export default function FilterableTable() {
  const [order, setOrder] = useState('asc');  // Sorting order state (ascending or descending)
  const [orderBy, setOrderBy] = useState('date-time');  // State to track the sorted field
  const [statusFilter, setStatusFilter] = useState('all');  // Status filter state

  // Handle sorting direction toggle on column click
  const handleRequestSort = () => {
    const isAsc = orderBy === 'date-time' && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy('date-time');
  };

  // Handle the change of the status filter dropdown
  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  // Filter the rows based on the selected status
  const filteredRows = rows.filter((row) => {
    return statusFilter === 'all' || row.status === statusFilter;
  });

  // Apply sorting to the filtered rows
  const displayRows = filteredRows.slice().sort(getComparator(order));

  return (
    <>
      {/* Status filter dropdown */}
      <Select value={statusFilter} onChange={handleStatusFilterChange} displayEmpty>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </Select>

      {/* Table displaying filtered and sorted rows */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Platform</TableCell>
            <TableCell>
              {/* Sortable column for expectedDate and expectedTime */}
              <TableSortLabel
                active={orderBy === 'date-time'}
                direction={order === 'date-time' ? order : 'asc'}
                onClick={handleRequestSort}
              >
                Expected Date & Time
              </TableSortLabel>
            </TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.platform}</TableCell>
              <TableCell>{`${row.expectedDate} ${row.expectedTime}`}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
```

## Explanation

### 1. **Component Structure**
This component creates a simple table with the following columns:
- **Platform:** A static field showing the platform name.
- **Expected Date & Time:** A sortable column that combines the `expectedDate` and `expectedTime` fields.
- **Status:** Displays the status of the row (`active` or `inactive`).

### 2. **Filtering Data by Status**
The component allows filtering the data by `status`. The `Select` dropdown enables users to select between:
- **All**: Displays all rows.
- **Active**: Displays only rows where `status === 'active'`.
- **Inactive**: Displays only rows where `status === 'inactive'`.

The filtered rows are stored in the `filteredRows` array, which is further sorted before being rendered.

### 3. **Sorting by expectedDate and expectedTime**
The component includes sorting logic for the `expectedDate` and `expectedTime` fields:
- **`createDateTimeObject(expectedDate, expectedTime)`** combines these two fields into a single JavaScript `Date` object.
- **`descendingComparator(a, b)`** compares two rows based on their combined `expectedDate` and `expectedTime`.
- **`getComparator(order)`** toggles between ascending and descending sorting order.
  
The `TableSortLabel` component allows users to click on the "Expected Date & Time" column header to toggle sorting between ascending and descending order.

### 4. **Rendering the Table**
The table body is populated by mapping over the `displayRows` array, which contains the filtered and sorted rows.

- Each row displays the `platform`, the combined `expectedDate` and `expectedTime`, and the `status`.
