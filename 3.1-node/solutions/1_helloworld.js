// Hello world
console.log("Hello Node World!");

// To print out all of process (noisy)
// console.log(process);

console.log("Node version:", process.version);
console.log("My OS is:", process.platform);
console.log("This script was run with:", process.argv);

// Bonus Challenge
console.log("-------------------------");
console.log("ENV VARIABLES:");
for (const name of Object.keys(process.env)) {
    console.log(`${name}="${process.env[name]}"`);
}

