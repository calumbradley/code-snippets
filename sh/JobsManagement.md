# Background Job Management in Unix-like Systems

## 1. List All Background Jobs

To display a list of all background jobs currently running or suspended, use the following command:

```bash
jobs
```

# Stop a Job

```bash
kill %n
```

# Forcefully Stop a Job

```bash
kill -9 %n
```

# Remove Job from Job List

```bash
disown %n
```

# Verify Job Removal

```bash
jobs
```

# Redirect Output to a File

You can redirect the standard output (stdout) and standard error (stderr) to a file when you start the process in the background.

Example:

```bash
command > output.log 2>&1 &
```

## If you want to discard the output completely, redirect it to /dev/null, which is a special file that discards all data written to it.

```bash
command > /dev/null 2>&1 &
```
