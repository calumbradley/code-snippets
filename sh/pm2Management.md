# Install PM2 globally using npm

```bash
npm install -g pm2
```

# Start an application with PM2

```bash
pm2 start app.js
```

# List all running PM2 processes

```bash
pm2 list
```

# Stop a specific application

```bash
pm2 stop app_name_or_id
```

# Restart a specific application

```bash
pm2 restart app_name_or_id
```

# Delete an application from PM2's process list

```bash
pm2 delete app_name_or_id
```

# Monitor logs for all PM2 managed processes

```bash
pm2 logs
```

# Save the current process list and environment

```bash
pm2 save
```

# Startup script generation to make PM2 auto-start on boot

```bash
pm2 startup
```

# Get the status of a specific application

```bash
pm2 status app_name_or_id
```

# Reload all applications (for zero-downtime reloads)

```bash
pm2 reload all
```

# Example PM2 Command to Start a Process with a Specific Command

```bash
pm2 start "node server.js" --name my-app
```
