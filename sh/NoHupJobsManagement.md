# Managing `nohup` Jobs in Unix-like Systems

## 1. Starting a Job with `nohup`

To start a command with `nohup`, use the following syntax:

```bash
nohup command > output.log 2>&1 &
```

# Start a Job with nohup

```bash
nohup command > output.log 2>&1 &
```

# Find a nohup Job by Searching for the Command Name or Process ID

```bash
ps aux | grep command_name
```

# Check the Output of a nohup Job

```bash
cat output.log
tail -f output.log
```

# Kill a nohup Job by Process ID

```bash
kill PID
```

# Forcefully Kill a nohup Job

```bash
kill -9 PID
```

# Disown a nohup Job by Process ID

```bash
disown PID
```

# Bring a Background Job to the Foreground

```bash
fg %1
```

# Monitor Processes Using top or htop

```bash
top
htop
```
