const EventEmitter = require("events");

const myEmitter = new EventEmitter();


myEmitter.on("login", (username) => {
    console.log(`User ${username} logged in successfully!`);
});

myEmitter.emit("login", "Devansh");

myEmitter.on("submit", () => {
    console.log(`Assignment submitted`);
});

myEmitter.emit("submit");

myEmitter.on("logout", (studentName) => {
    console.log(`Student ${studentName} logged out.`);
});

myEmitter.emit("logout", "Devansh");

myEmitter.on("exit", () => {
    console.log("Exiting application");
});

myEmitter.emit("exit");