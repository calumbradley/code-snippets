#!/bin/bash

# Echo the arguments (if needed)
echo "Connection String: $1"

# Use echo to send the query and pipe it into iusql
echo "SELECT * FROM my_table; EXIT;" | iusql -d "$1"

# Check the exit status of iusql
if [ $? -eq 0 ]; then
    echo "iusql executed successfully"
else
    echo "iusql failed"
fi