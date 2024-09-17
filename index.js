
const { log } = require('console');
const os = require('os');

console.log('My first app');




// console.log("============== Build in Module - os ===========");
// console.log(`Arch: ${os.arch()}`);
// console.log("cpus:", os.cpus());
// console.log(`Memory Information: ${os.freemem()}`);
// console.log(`Total memory: ${os.totalmem()}`);
// console.log(`Host name: ${os.hostname()}`);
// console.log(`Platform: ${os.platform()}`);
// console.log(`Release: ${os.release()}`);
// console.log(`Type of os: ${os.type()}`);
// console.log(`Uptime: ${os.uptime()}`);
// console.log("User Information :",os.userInfo());

console.log(`========== Global Objects ===========`);
// console.log(global);
// console.log(console);
// console.log(process);
console.log("File Name",__filename);
console.log("Directory Name",__dirname);
console.log(module);
