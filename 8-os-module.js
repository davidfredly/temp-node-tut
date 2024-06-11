
const os = require('os');

// info om användare
const user = os.userInfo();
console.log(user);

// systemets uptime i sekunder
console.log(`The system uptime is ${os.uptime()} seconds.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);
 