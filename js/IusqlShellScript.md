#!/bin/bash

# Echo the arguments (this works fine)
echo "First argument: $1"
echo "Second argument: $2"
echo "Third argument: $3"

# Run the iusql command and capture output
iusql -S "$1" -d "DRIVER={SQL Server};SERVER=$2;DATABASE=$3;UID=username;PWD=password;" > iusql_output.log 2>&1

# Check the exit status of iusql
if [ $? -eq 0 ]; then
    echo "iusql executed successfully"
else
    echo "iusql failed, check iusql_output.log"
fi

# Optionally cat the output log to stdout
cat iusql_output.log