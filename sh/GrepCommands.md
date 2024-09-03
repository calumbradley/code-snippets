# Basic Search

# Search for a specific term in a file.

```bash
grep "search_term" filename
```

# Recursive Search

# Search for a term across multiple files in a directory (and subdirectories).

```bash
grep -r "search_term" /path/to/directory
```

# Case-Insensitive Search

# Ignore case when searching (e.g., match "Example", "example", "EXAMPLE").

```bash
grep -i "search_term" filename
```

# Whole Word Search

# Search for a whole word only (not substrings).

```bash
grep -w "search_term" filename
```

# Line Numbers

# Display line numbers along with matching lines.

```bash
grep -n "search_term" filename
```

# Count Matches

# Count the number of matches in a file.

```bash
grep -c "search_term" filename
```

# Search for a Pattern

# Search for lines matching a regular expression (e.g., lines starting with "foo").

```bash
grep "^foo" filename
```

# Inverted Search

# Find lines that do NOT match the pattern.

```bash
grep -v "search_term" filename
```

# Search Across All Files

# Search for a term in all files in the current directory.

```bash
grep "search_term" *
```

# Search Multiple Patterns

# Search for multiple patterns in a file.

```bash
grep -e "pattern1" -e "pattern2" filename
```
