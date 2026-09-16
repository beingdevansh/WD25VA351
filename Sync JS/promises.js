const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('promises.txt', 'Hello Students!');
        console.log("File created successfully");
    }
    catch (error) {
        console.log('Error:', error);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile('promises.txt', 'utf-8');
        console.log('File Content:');
        console.log(data);
    }
    catch (error) {
        console.log('Error:', error);
    }
}

async function appendFile() {
    try {
        await fs.appendFile('promises.txt', '\nWelcome to FSD Training');
        console.log('Data appended successfully');
    }
    catch (error) {
        console.log('Error:', error);
    }
}

async function renameFile() {
    try {
        await fs.rename('promises.txt', 'Promises.txt');
        console.log('File renamed successfully');
    }
    catch (error) {
        console.log("Error:", error);
    }
}

async function main() {
    await writeFile();
    await readFile();
    await appendFile();
    await renameFile();
}

main();