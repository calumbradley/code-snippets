# Run iusql and capture output

```bash
iusql -d "DRIVER={your-driver};SERVER=your-server;DATABASE=your-db;UID=your-username;PWD=your-password;" < path/to/query.sql > raw_output.txt
```

# Parse the raw output with awk and convert to CSV

```bash
awk '
BEGIN { FS="|"; OFS="," }
NR > 2 && $0 !~ /^\+|SQLRowCount returns|rows fetched/ {
    gsub(/^ +| +$/, "", $0); # Remove leading and trailing spaces
print $2, $3, $4 # Adjust based on the number of columns in your output
}
' raw_output.txt > output.csv
```

# Check if iusql executed successfully

```bash
if [ $? -eq 0 ]; then
echo "iusql executed successfully, results saved to output.csv"
else
echo "iusql failed"
fi
```
