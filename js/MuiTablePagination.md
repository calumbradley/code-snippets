
# MUI Table Pagination Example

Here’s a simple example of how to use Material-UI (MUI) `TablePagination` in a React component:

```jsx
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const SimpleTableWithPagination = () => {
  // Sample data
  const rows = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 28 },
    { id: 3, name: 'Peter', age: 35 },
    { id: 4, name: 'Paul', age: 24 },
    { id: 5, name: 'Anna', age: 29 },
    { id: 6, name: 'Tom', age: 32 },
  ];

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle change for pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page on rows per page change
  };

  // Calculate rows to display
  const displayRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </Paper>
  );
};

export default SimpleTableWithPagination;
```

### Key Points:
- **State**: `page` and `rowsPerPage` control the pagination.
- **handleChangePage**: Updates the current page.
- **handleChangeRowsPerPage**: Adjusts the number of rows displayed per page and resets the page to 0 when changed.
- **TablePagination**: Handles pagination controls below the table, such as next/previous page and rows per page options.