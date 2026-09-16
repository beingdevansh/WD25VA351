const fs = require("fs");
//write
fs.writeFile("sample.txt", "Welcome to full stack development", (err) => {
    if (err) {
        console.log("error creating file:", err);
        return;
    }
    console.log("File created successfully !");
})
//read
fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.log("error reading file:", err);
        return;
    }
    console.log("File content:");
    console.log(data);
})
//append
fs.appendFile("sample.txt", "\nSemester:3", (err) => {
    if (err) {
        console.log("error reading file:", err);
    }
    else {
        console.log("\nFile updated successfully");
    }
})
//updated read
fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.log("error reading file:", err);
        return;
    }

})