# Running a Shell Script with Arguments in Node.js and Capturing Real-Time Output

When you need to execute a shell script from Node.js that accepts an array of arguments, you can use the `child_process` module's `spawn` function to do so. Additionally, you can capture the real-time output of the script, which is especially useful when running long-running processes like `iusql`.

## Example with `argsArray`

In the following example, we'll demonstrate how to spawn a shell script, pass arguments via an `argsArray`, and capture the real-time output from the script.

### Node.js Code:

```javascript
const { spawn } = require('child_process');

// Path to your shell script
const shellScript = './path-to-your-shell-script.sh';

// Array of arguments to be passed to the shell script
const argsArray = ['arg1', 'arg2', 'arg3'];

// Spawn the shell script with the spread of argsArray
const scriptProcess = spawn('sh', [shellScript, ...argsArray]);

// Capture stdout and display real-time output
scriptProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

// Capture stderr and display real-time error output (if any)
scriptProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

// When the process closes, log the exit code
scriptProcess.on('close', (code) => {
    console.log(`Process exited with code: ${code}`);
});