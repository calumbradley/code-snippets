# 1. Using lsof to Check Processes Running on a Port

```bash
lsof -i :PORT_NUMBER
```

# Example:

```bash
lsof -i :8080
```

# 2. Using netstat to Check Processes Running on a Port

```bash
netstat -tuln | grep :PORT_NUMBER
```

# Example:

```bash
netstat -tuln | grep :8080
```

# To include the process ID and program name:

```bash
netstat -tulnp | grep :PORT_NUMBER
```

# Example:

```bash
netstat -tulnp | grep :8080
```

# 3. Using ss to Check Processes Running on a Port

```bash
ss -tuln | grep :PORT_NUMBER
```

# Example:

```bash
ss -tuln | grep :8080
```

# To include the process ID and program name:

```bash
ss -tulnp | grep :PORT_NUMBER
```

# Example:

```bash
ss -tulnp | grep :8080
```

# 4. Using fuser to Check Processes Running on a Port

```bash
fuser PORT_NUMBER/tcp
```

# Example:

```bash
fuser 8080/tcp
```

# 5. Using ps with grep to Check Processes Running on a Port

```bash
ps aux | grep PORT_NUMBER
```

# Example:

```bash
ps aux | grep 8080
```
