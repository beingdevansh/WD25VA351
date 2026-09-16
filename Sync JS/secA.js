const fs = require('fs');

fs.writeFileSync('devansh.txt', 'Hello, myself Devansh Kumar', 'utf8',);
console.log('File written successfully.');

fs.appendFileSync('devansh.txt', '\nI study in ABESEC', 'utf8');

const data = fs.readFileSync('devansh.txt', 'utf8');
console.log(data);

// fs.unlinkSync('devansh.txt');
// console.log('File deleted successfully.');

fs.mkdirSync('Folder');
console.log('Folder created successfully.');

// fs.rmdirSync('Folder');
// console.log('Folder deleted successfully.');

if (fs.existsSync('devansh.txt')) {
    console.log('File exists.');
} else {
    console.log('File not found, need to create it.');
}